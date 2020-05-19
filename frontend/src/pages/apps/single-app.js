import React from "react"
import AppCarousel from "../../components/AppCarousel/AppCarousel"
import "bootstrap/dist/css/bootstrap.min.css"
import { Jumbotron, Container } from "reactstrap"
import * as forFrontend from "../../shared/convertForFrontend"
import getSingleApp from "../../shared/fetchActions/getSingleApp"

const SingleApp = ({ appId }) => {
  const [app, setApp] = React.useState(null)

  React.useEffect(() => {
    ;(async () => {
      const appData = await getSingleApp(appId)
      const app = forFrontend.convertApp(appData)
      setApp(app)
    })()
  }, [appId])

  if (app) {
    const { name, description } = app
    return (
      <div className="AnAppPage-container">
        <AppCarousel apps={[app]}></AppCarousel>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">{name}</h1>
            <p className="lead">{description}</p>
          </Container>
        </Jumbotron>
      </div>
    )
  }

  return null
}

export default SingleApp
