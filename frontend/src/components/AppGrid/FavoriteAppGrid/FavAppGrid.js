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
import "./FavAppGrid.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import updateMyFavoriteApp from "../../../shared/fetchActions/updateMyFavoriteApp"

const FavAppGrid = ({ apps, appUrls }) => {
  return (
    <div className={"FavAppGrid-container"}>
      {apps.map((app, index) => (
        <RenderSingleApp app={app} index={index} appUrl={appUrls[index]} />
      ))}
    </div>
  )
}
export default FavAppGrid

const RenderSingleApp = ({
  app: { image, imageUrl, name, description, id, isFavorite },
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
        <RenderFavoriteButton appId={id} isFavorite={isFavorite} />
      </CardFooter>
    </Card>
  )
}

const RenderFavoriteButton = ({ appId, isFavorite }) => {
  const [isFav, setIsFavorite] = React.useState(isFavorite)

  const toggleFavorite = () => {
    // We set the favorite on the client side and asynchronously
    // Ask the backend to also update the favorite
    setIsFavorite(isFav => !isFav)

    // TODO : Ideally the server update would be
    // TODO : debounced in case a user is rapidly clicking the button, but perhaps that
    // TODO : can be a later enhancement.
    updateMyFavoriteApp(appId, !isFav)
  }

  return (
    <FontAwesomeIcon
      icon={faHeart}
      color={isFav ? "red" : "grey"}
      onClick={event => {
        event.preventDefault()
        toggleFavorite()
      }}
      className={"FavAppGrid-FavIcon"}
    ></FontAwesomeIcon>
  )
}
