import React from "react"
import AppCarousel from "../../components/AppCarousel/AppCarousel"
import "bootstrap/dist/css/bootstrap.min.css"
import { Jumbotron, Container } from "reactstrap"
import ShareSocial from "../../components/share-social"
import PaginatedComments from "../../components/Comments/PaginatedComments"
import * as forFrontend from "../../shared/convertForFrontend"
import getSingleApp from "../../shared/fetchActions/getSingleApp"
import Rating from "../../components/Ratings/Rating"
import {
  Distribution,
  calcStats,
} from "../../components/Ratings/RatingDistribution"
import "./single-app.css"

export const SingleApp = ({ appId }) => {
  const [app, setApp] = React.useState(null)

  React.useEffect(() => {
    ;(async () => {
      const appData = await getSingleApp(appId)
      const app = forFrontend.convertApp(appData)
      console.log(app)
      setApp(app)
    })()
  }, [appId])

  if (app) {
    const { id, name, description, rating, ratings: distribution } = app
    return (
      <div className="AnAppPage-container">
        <AppCarousel items={[app]} />
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">{name}</h1>
            <p className="lead">{description}</p>
            <ShareSocial></ShareSocial>
          </Container>
        </Jumbotron>
        <RatingControl
          appId={id}
          distribution={distribution}
          initialRating={rating}
        ></RatingControl>
        <PaginatedComments comments={exampleComments}></PaginatedComments>
      </div>
    )
  }

  return null
}

export default SingleApp

// TODO : It looks like it doesn't work to maintain the distribution locally, since on mount
// TODO : All the data is really held above at the page level. This means that on
// TODO : Any re-mounts, which will typically happen as we navigate from apps to apps/:id,
// TODO : The old data gets reloaded, leading to weird bugs
// TODO : A CONTEXT should be used to hold the logic to modify and refetch the data

const RatingControl = ({ distribution, appId, initialRating }) => {
  const [ratings, setRatings] = React.useState(distribution)
  const [userRating, setUserRating] = React.useState(initialRating)
  const { count, average } = calcStats(ratings)
  console.log(count)

  console.log("rerendering")
  console.log(ratings)

  const onChangeRating = async (oldRating, newRating) => {
    if (userRating <= 0) {
      // If the user hasn't rated this before
      setRatings(ratings => {
        setUserRating(newRating)
        ratings[newRating] = ratings[newRating] + 1
        return ratings
      })
    } else {
      setRatings(ratings => {
        setUserRating(newRating)
        ratings[newRating] = ratings[newRating] + 1
        ratings[oldRating] = Math.max(ratings[oldRating] - 1, 0)
        return ratings
      })
    }
  }

  return (
    <div className={"RatingControl-container"}>
      <div className={"RatingControl-header"}>
        <Rating
          className={"RatingControl-stars"}
          appId={appId}
          rating={userRating ? userRating : average}
          onChangeRating={onChangeRating}
        ></Rating>
        <span className={"RatingControl-average"}>
          {count === 0 ? null : `${average} out of 5`}
        </span>
      </div>
      {userRating > 0 ? (
        <span className={"RatingControl-thanks"}>Thanks for rating!</span>
      ) : null}
      <span className={"RatingControl-count"}>{count} ratings</span>
      <Distribution distribution={ratings}></Distribution>
    </div>
  )
}

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
