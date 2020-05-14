import React from "react"
import AppCarousel from "../../components/app-carousel"
import "bootstrap/dist/css/bootstrap.min.css"
import { Jumbotron, Container } from "reactstrap"
import { mapApp } from "../../shared/mappers"
import { fetchApp } from "../../shared/fetch"

const SingleApp = ({ appId }) => {
  const [app, setApp] = React.useState(null)

  React.useEffect(() => {
    ;(async () => {
      const app = mapApp(await fetchApp(appId))
      setApp(app)
    })()
  }, [appId])

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

export default SingleApp
