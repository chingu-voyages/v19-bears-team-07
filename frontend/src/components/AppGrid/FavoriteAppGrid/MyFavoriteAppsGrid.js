import React from "react"
import * as forFrontend from "../../../shared/convertForFrontend"
import "./FavAppGrid.css"
import getMyFavoriteApps from "../../../shared/fetchActions/getMyFavoriteApps"
import FavAppGrid from "./FavAppGrid"

/* Implements an app grid with a favorite button that is connected to the db
 */
const MyFavoriteAppsGrid = () => {
  const [apps, setApps] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const apps = (await getMyFavoriteApps()).map(forFrontend.convertApp)
      setApps(apps)
    })()
  }, [])

  const appUrls = apps.map(app => app.url)
  return <FavAppGrid apps={apps} appUrls={appUrls}></FavAppGrid>
}
export default MyFavoriteAppsGrid
