import React from "react"
import AppCarousel from "../components/app-carousel"
import "bootstrap/dist/css/bootstrap.min.css"
import { Jumbotron, Container } from "reactstrap"

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
  return {
    name: "Facebook",
    imageUrl:
      "https://brandthunder.com/wp/wp-content/uploads/2012/07/Facebook-skins-post.png",
    image: undefined,
    description: "The world's leading social media platform",
    url: "/apps/1",
  }
}
