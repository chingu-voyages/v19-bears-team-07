import React from "react"
import AppGrid from "../../components/AppGrid/AppGrid"
import getSinglePortfolio from "../../shared/fetchActions/getSinglePortfolio"
import { mapApp } from "../../shared/mappers"

const SinglePortfolio = ({ userId }) => {
  const [apps, setApps] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const { apps } = await getSinglePortfolio(userId)
      const mappedApps = apps.map(mapApp)
      setApps(mappedApps)
    })()
  }, [userId])

  return (
    <div className="APortfolioPage-container">
      <h2>Apps</h2>
      <AppGrid apps={apps}></AppGrid>
    </div>
  )
}

export default SinglePortfolio
