import React from "react"
import AppGrid from "../../components/AppGrid/PublicAppGrid"
import getSinglePortfolio from "../../shared/fetchActions/getSinglePortfolio"
import * as forFrontend from "../../shared/convertForFrontend"
import getSingleUser from "../../shared/fetchActions/getSingleUser"
import getUserSkills from "../../shared/fetchActions/getUserSkills"
import "./single-portfolio.css"

const SinglePortfolio = ({ userId }) => {
  const [apps, setApps] = React.useState([])
  const [user, setUser] = React.useState([])
  const [skills, setSkills] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const { apps: appsData } = await getSinglePortfolio(userId)
      const apps = appsData.map(forFrontend.convertApp)
      setApps(apps)

      const userData = await getSingleUser(userId)
      const user = forFrontend.convertUser(userData)
      setUser(user)

      const { skills: skillsData } = await getUserSkills(userId)
      const skills = skillsData.map(name => name)
      setSkills(skills)
    })()
  }, [userId])

  const appUrls = apps.map(app => app.url)
  return (
    <div className="APortfolioPage-container">
      <h1>{user.name}</h1>
      <img src={user.image} className={"APortfolioPage-image"}></img>
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
        {skills.map(skill => (
          <li>{skill.name}</li>
        ))}
      </ul>

      <h2>Teams</h2>

      <h2>Apps</h2>
      <AppGrid apps={apps} appUrls={appUrls}></AppGrid>
    </div>
  )
}

export default SinglePortfolio
