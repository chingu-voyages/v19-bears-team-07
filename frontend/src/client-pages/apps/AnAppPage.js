import React from "react"
import AppCarousel from "../../components/app-carousel"
import "bootstrap/dist/css/bootstrap.min.css"
import { Jumbotron, Container } from "reactstrap"
import { mapApp } from "../../shared/mappers"
import { fetchAnApp } from "../../shared/fetch"

const AnAppPage = props => {
  const { appId } = props
  const [app, setApp] = React.useState(null)

  React.useEffect(() => {
    ;(async () => {
      const app = await fetchApp(appId)
      setApp(app)
    })()
  }, [])

  if (app) {
    const { name, description } = app
    return (
      <div className={"AnAppPage-container"}>
        <AppCarousel apps={[app]}></AppCarousel>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className={"display-3"}>{name}</h1>
            <p className={"lead"}>{description}</p>
          </Container>
        </Jumbotron>
      </div>
    )
  }

  return null
}

export default AnAppPage

const fetchApp = async appId => {
  const appData = await fetchAnApp(appId)

  return mapApp(appData)
}
