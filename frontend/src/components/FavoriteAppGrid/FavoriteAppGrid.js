import React from "react"
import { navigate } from "gatsby"
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap"
import * as forFrontend from "../../shared/convertForFrontend"
import "./FavAppGrid.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

/* Implements an app grid with a favorite button that is connected to the db
 */
const FavoriteAppGrid = () => {
  const [apps, setApps] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      // TODO: This should include a statement to map `forFrontend`
      const apps = await getMyFavoriteApps()
      setApps(apps)
    })()
  }, [])

  const appUrls = apps.map(app => app.url)
  return <AppGrid apps={apps} appUrls={appUrls}></AppGrid>
}
export default FavoriteAppGrid

const AppGrid = ({ apps, appUrls }) => {
  return (
    <div className={"FavAppGrid-container"}>
      {apps.map((app, index) => (
        <RenderSingleApp app={app} index={index} appUrl={appUrls[index]} />
      ))}
    </div>
  )
}

const RenderSingleApp = ({
  app: { image, imageUrl, name, description },
  index,
  appUrl,
}) => {
  return (
    <Card className="FavAppGrid-Card" key={index.toString() + "-" + appUrl}>
      <CardImg
        src={image ? image : imageUrl}
        width="100%"
        onClick={event => {
          event.preventDefault()
          navigate(appUrl)
        }}
        className="FavAppGrid-Image"
      />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <RenderFavoriteButton></RenderFavoriteButton>
      </CardFooter>
    </Card>
  )
}

const RenderFavoriteButton = ({}) => {
  const [isFavorite, setIsFavorite] = React.useState(false)

  const toggleFavorite = () => {
    setIsFavorite(isFavorite => !isFavorite)
  }

  return (
    <FontAwesomeIcon
      icon={faHeart}
      color={isFavorite ? "red" : "grey"}
      onClick={event => {
        event.preventDefault()
        toggleFavorite()
      }}
      className={"FavAppGrid-FavIcon"}
    ></FontAwesomeIcon>
  )
}

const getMyFavoriteApps = async () => {
  return [
    {
      name: "Test 1",
      description: "Description",
      image:
        "https://brandthunder.com/wp/wp-content/uploads/2012/07/Facebook-skins-post.png",
      appUrl: "url",
      githubUrl: "url",
      userId: 5,
      url: `/apps/${5}`,
      manageUrl: `/manage-apps/${5}/edit`,
      imageUrl: "",
    },
    {
      name: "Test 1",
      description: "Description",
      image:
        "https://brandthunder.com/wp/wp-content/uploads/2012/07/Facebook-skins-post.png",
      appUrl: "url",
      githubUrl: "url",
      userId: 5,
      url: `/apps/${5}`,
      manageUrl: `/manage-apps/${5}/edit`,
      imageUrl: "",
    },
    {
      name: "Test 1",
      description: "Description",
      image:
        "https://brandthunder.com/wp/wp-content/uploads/2012/07/Facebook-skins-post.png",
      appUrl: "url",
      githubUrl: "url",
      userId: 5,
      url: `/apps/${5}`,
      manageUrl: `/manage-apps/${5}/edit`,
      imageUrl: "",
    },
  ]
}
