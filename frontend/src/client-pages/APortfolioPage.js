import React from "react"
import { AppGrid } from "../components/app-grid"
import { fetchAPortfolio } from "../helpers/fetch"
import { mapApp } from "../helpers/mappers"

const APortfolioPage = props => {
  const { userId } = props

  const [apps, setApps] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const apps = await fetchPortfolioForUser(userId)
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

const fetchPortfolioForUser = async userId => {
  const portfolio = await fetchAPortfolio(userId)
  console.log(portfolio)
  return portfolio.apps.map(mapApp)
}
