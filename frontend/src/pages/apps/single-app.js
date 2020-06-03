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
import FavoriteButton from "../../components/AppGrid/FavoriteAppGrid/FavoriteButton"
import UserContext from "../../shared/UserContext"

export const SingleApp = ({ appId }) => {
  const [app, setApp] = React.useState(null)
  const { loggedIn } = React.useContext(UserContext)

  React.useEffect(() => {
    ;(async () => {
      const appData = await getSingleApp(appId)
      const app = forFrontend.convertApp(appData)
      setApp(app)
    })()
  }, [appId])

  if (app) {
    const {
      id,
      name,
      description,
      isFavorite,
      rating,
      ratings: distribution,
    } = app
    return (
      <div className="AnAppPage-container">
        <AppCarousel items={[app]} />
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Name: {name}</h1>
            <p className="lead">Description: {description}</p>
            <ShareSocial></ShareSocial>
            {loggedIn ? (
              <FavoriteButton
                appId={id}
                isFavorite={isFavorite}
              ></FavoriteButton>
            ) : null}
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

// This allows the user to rate the app and view the app's ratings
const RatingControl = ({ distribution, appId, initialRating }) => {
  const [ratings, setRatings] = React.useState(distribution)
  const [userRating, setUserRating] = React.useState(initialRating)
  const { count, average } = calcStats(ratings)

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
