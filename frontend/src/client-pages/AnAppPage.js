import React from "react"
import AppCarousel from "../components/app-carousel"
import "bootstrap/dist/css/bootstrap.min.css"
import { Jumbotron, Container } from "reactstrap"
import { mapApp } from "../helpers/mappers"

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

// TODO: This needs to fetch data from the server. To minimize client processing, we should query for the specific app id.
const fetchApp = async appId => {
  const appData = {
    name: "Facebook",
    description: "The world's leading social media platform",
    image: undefined,
    github_url: "http://www.github.com",
    app_url: "http://www.app.com",
    id: 1,
  }

  return mapApp(appData)
}
