import React from "react"
import AppCarousel from "../../components/AppCarousel/AppCarousel"
import "bootstrap/dist/css/bootstrap.min.css"
import { Jumbotron, Container, Row, Col } from "reactstrap"
import ShareSocial from "../../components/share-social"
import PaginatedComments from "../../components/Comments/PaginatedComments"
import * as forFrontend from "../../shared/convertForFrontend"
import getSingleApp from "../../shared/fetchActions/getSingleApp"
import DeveloperIcons from "../../components/DeveloperIcons/DeveloperIcons"
import Rating from "../../components/Ratings/Rating"
import {
  Distribution,
  calcStats,
} from "../../components/Ratings/RatingDistribution"
import "./single-app.css"
import FavoriteButton from "../../components/AppGrid/FavoriteAppGrid/FavoriteButton"
import UserContext from "../../shared/UserContext"
import getCommentsForApp from "../../shared/fetchActions/getCommentsForApp"

export const SingleApp = ({ appId }) => {
  const [app, setApp] = React.useState(null)
  const [comments, setComments] = React.useState([])
  const { loggedIn } = React.useContext(UserContext)

  const refreshComments = async () => {
    const comments = (await getCommentsForApp(appId)).map(
      forFrontend.convertComment
    )
    setComments(comments)
  }

  React.useEffect(() => {
    ;(async () => {
      const appData = await getSingleApp(appId)
      const app = forFrontend.convertApp(appData)
      setApp(app)

      refreshComments()
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
        <Row>
          <Col xl={9} lg={9} md={12} sm={12} xs={12}>
            <AppCarousel items={[app]} />
            <Jumbotron fluid>
              <Container fluid>
                <h1 className="display-3">Name: {name}</h1>
                <p className="lead">Description: {description}</p>
                <ShareSocial imageUrl={app.image}></ShareSocial>
                {loggedIn ? (
                  <FavoriteButton
                    appId={id}
                    isFavorite={isFavorite}
                  ></FavoriteButton>
                ) : null}
              </Container>
            </Jumbotron>
          </Col>
          <Col xl={3} lg={3} md={12} sm={12} xs={12}>
            <h4>Developers</h4>
            <DeveloperIcons devIds={app.userId ? [app.userId] : []} />
          </Col>
        </Row>
        <RatingControl
          appId={id}
          distribution={distribution}
          initialRating={rating}
        ></RatingControl>
        <PaginatedComments
          refreshComments={refreshComments}
          appId={appId}
          comments={comments}
        ></PaginatedComments>
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
