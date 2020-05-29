import React from "react"
import UserContext from "../../shared/UserContext"
import FavAppGrid from "./FavoriteAppGrid/FavAppGrid"
import AppGrid from "./AppGrid/AppGrid"

/** Displays apps to the public according to whether they are logged in or not
 * */

const PublicAppGrid = ({ apps, appUrls }) => {
  const { loggedIn } = React.useContext(UserContext)

  if (loggedIn) {
    return <FavAppGrid apps={apps} appUrls={appUrls}></FavAppGrid>
  } else {
    return <AppGrid apps={apps} appUrls={appUrls}></AppGrid>
  }
}

export default PublicAppGrid
