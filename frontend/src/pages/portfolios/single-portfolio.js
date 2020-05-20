import React from "react"
import AppGrid from "../../components/AppGrid/AppGrid"
import getSinglePortfolio from "../../shared/fetchActions/getSinglePortfolio"
import * as forFrontend from "../../shared/convertForFrontend"
import getSingleUser from "../../shared/fetchActions/getSingleUser"

const SinglePortfolio = ({ userId }) => {
  const [apps, setApps] = React.useState([])

  const [user, setUser] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const { apps: appsData } = await getSinglePortfolio(userId)
      const apps = appsData.map(forFrontend.convertApp)
      setApps(apps)

      const userData = await getSingleUser(userId)
      const user = forFrontend.convertUser(userData)
      setUser(user)
    })()
  }, [userId])

  return (
    <div className="APortfolioPage-container">
      <h1>{user.name}</h1>
      <img src={user.image}></img>
      <p>{user.bio}</p>
      <a href={user.twitter}>Twitter</a>
      <a href={user.github}>Github</a>
      <a href={user.linkedin}>Linkedin</a>
      <a href={user.website}>Personal Website</a>

      <h2>Teams</h2>

      <h2>Apps</h2>
      <AppGrid apps={apps}></AppGrid>
    </div>
  )
}

export default SinglePortfolio
