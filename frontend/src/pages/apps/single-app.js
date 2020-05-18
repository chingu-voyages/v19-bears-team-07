import React from "react"
import AppCarousel from "../../components/app-carousel"
import "bootstrap/dist/css/bootstrap.min.css"
import { Jumbotron, Container } from "reactstrap"
import { mapApp } from "../../shared/mappers"
import { fetchApp } from "../../shared/fetch"
import PaginatedComments from "../../components/Comments/PaginatedComments"

export const SingleApp = ({ appId }) => {
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
        <PaginatedComments comments={exampleComments}></PaginatedComments>
      </div>
    )
  }

  return null
}

export default SingleApp

let ex = [
  {
    username: "Micah",
    text: "Left FB for this",
    timestamp: new Date(),
    avatar:
      "https://www.kirkleescollege.ac.uk/wp-content/uploads/2015/09/default-avatar.png",
    user_id: 2,
  },
  {
    username: "Jeremiah",
    text: "Left FB for this",
    timestamp: new Date(),
    avatar:
      "https://www.kirkleescollege.ac.uk/wp-content/uploads/2015/09/default-avatar.png",
    user_id: 2,
  },
  {
    username: "Michael",
    text: "Left FB for this",
    timestamp: new Date(),
    avatar:
      "https://www.kirkleescollege.ac.uk/wp-content/uploads/2015/09/default-avatar.png",
    user_id: 2,
  },
  {
    username: "Jeremiad",
    text: "Left FB for this",
    timestamp: new Date(),
    avatar:
      "https://www.kirkleescollege.ac.uk/wp-content/uploads/2015/09/default-avatar.png",
    user_id: 2,
  },
  {
    username: "Mica",
    text: "Left FB for this",
    timestamp: new Date(),
    avatar:
      "https://www.kirkleescollege.ac.uk/wp-content/uploads/2015/09/default-avatar.png",
    user_id: 2,
  },
  {
    username: "Jeremy",
    text: "Left FB for this",
    timestamp: new Date(),
    avatar:
      "https://www.kirkleescollege.ac.uk/wp-content/uploads/2015/09/default-avatar.png",
    user_id: 2,
  },
]

const exampleComments = ex.concat(ex).concat(ex).concat(ex).concat(ex)
