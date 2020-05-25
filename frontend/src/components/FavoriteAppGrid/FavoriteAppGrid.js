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
import getMyFavoriteApps from "../../shared/fetchActions/getMyFavoriteApps"
import updateMyFavoriteApp from "../../shared/fetchActions/updateMyFavoriteApp"

/* Implements an app grid with a favorite button that is connected to the db
 */
const FavoriteAppGrid = () => {
  const [apps, setApps] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const apps = (await getMyFavoriteApps()).map(forFrontend.convertApp)
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
  app: { image, imageUrl, name, description, id },
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
        <RenderFavoriteButton appId={id} />
      </CardFooter>
    </Card>
  )
}

const RenderFavoriteButton = ({ appId }) => {
  const [isFavorite, setIsFavorite] = React.useState(true)

  const toggleFavorite = () => {
    // We set the favorite on the client side and asynchronously
    // Ask the backend to also update the favorite
    setIsFavorite(isFavorite => !isFavorite)

    // TODO : Ideally the server update would be
    // TODO : debounced in case a user is rapidly clicking the button, but perhaps that
    // TODO : can be a later enhancement.
    updateMyFavoriteApp(appId, !isFavorite)
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
