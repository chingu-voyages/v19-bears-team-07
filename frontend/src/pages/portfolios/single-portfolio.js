import React from "react"
import { AppGrid } from "../../components/AppGrid/AppGrid"
import { fetchPortfolio } from "../../shared/fetch"
import { mapApp } from "../../shared/mappers"

const SinglePortfolio = props => {
  const { userId } = props

  const [apps, setApps] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const apps = (await fetchPortfolio(userId)).apps.map(mapApp)
      setApps(apps)
    })()
  }, [userId])

  return (
    <div className={"APortfolioPage-container"}>
      <h2>Apps</h2>
      <AppGrid apps={apps}></AppGrid>
    </div>
  )
}

export default SinglePortfolio
