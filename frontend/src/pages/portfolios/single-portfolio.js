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

  const appUrls = apps.map(app => app.url)
  return (
    <div className="APortfolioPage-container">
      <h1>{user.name}</h1>
      <img src={user.image}></img>
      <h2>Developer Bio</h2>
      <p>{user.bio}</p>
      <h2>Check out my links!</h2>
      <ul>
        <li>
          <a href={user.twitter}>Twitter</a>
        </li>
        <li>
          <a href={user.github}>Github</a>
        </li>
        <li>
          <a href={user.linkedin}>Linkedin</a>
        </li>
        <li>
          <a href={user.website}>Personal Website</a>
        </li>
      </ul>

      <h2>Skills</h2>
      <ul>
        <li>javascript</li>
        <li>react</li>
        <li>ruby</li>
        <li>rails</li>
      </ul>

      <h2>Teams</h2>

      <h2>Apps</h2>
      <AppGrid apps={apps} appUrls={appUrls}></AppGrid>
    </div>
  )
}

export default SinglePortfolio
