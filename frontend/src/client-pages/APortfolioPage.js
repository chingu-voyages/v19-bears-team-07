import React from "react"
import { AppGrid } from "../components/app-grid"

const APortfolioPage = props => {
  const { userId } = props

  const [apps, setApps] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const apps = await fetchAppsForUser(userId)
      setApps(apps)
    })()
  }, [])

  return (
    <div className={"APortfolioPage-container"}>
      <h2>Apps</h2>
      <AppGrid apps={apps}></AppGrid>
    </div>
  )
}

export default APortfolioPage

// TODO: This needs to query the server for all the apps for this particular user.
const fetchAppsForUser = async userId => {
  return apps
}

const apps = [
  {
    name: "Facebook",
    imageUrl:
      "https://brandthunder.com/wp/wp-content/uploads/2012/07/Facebook-skins-post.png",
    image: undefined,
    description: "The world's leading social media platform",
    url: "/apps/1",
  },
  {
    name: "Facebook",
    imageUrl:
      "https://brandthunder.com/wp/wp-content/uploads/2012/07/Facebook-skins-post.png",
    image: undefined,
    description: "The world's leading social media platform",
    url: "/apps/1",
  },
  {
    name: "Facebook",
    imageUrl:
      "https://brandthunder.com/wp/wp-content/uploads/2012/07/Facebook-skins-post.png",
    image: undefined,
    description: "The world's leading social media platform",
    url: "/apps/1",
  },
  {
    name: "Facebook",
    imageUrl:
      "https://brandthunder.com/wp/wp-content/uploads/2012/07/Facebook-skins-post.png",
    image: undefined,
    description: "The world's leading social media platform",
    url: "/apps/1",
  },
]
