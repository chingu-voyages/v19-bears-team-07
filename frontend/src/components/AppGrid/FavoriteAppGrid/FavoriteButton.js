import React from "react"
import "./FavAppGrid.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import updateMyFavoriteApp from "../../../shared/fetchActions/updateMyFavoriteApp"
import "./FavoriteButton.css"
import classNames from "classnames"

const FavoriteButton = ({ appId, isFavorite, className }) => {
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
      className={classNames("FavButton-FavIcon", className)}
    ></FontAwesomeIcon>
  )
}
export default FavoriteButton
