import React from "react"
import { Rate } from "antd"
import "./AntRate.css"
import UserContext from "../../shared/UserContext"
import updateRating from "../../shared/fetchActions/updateRating"

// This controlled component allows you to submit a rating for the current app
// However, you must be logged in for it to actually do anything
const Rating = ({ appId, rating, onChangeRating }) => {
  const { loggedIn } = React.useContext(UserContext)

  // TODO: Ideally, this would be debounced in case of multiple rapid ratings.
  const rate = newRating => {
    if (loggedIn) {
      void onChangeRating(rating, newRating)
      void updateRating(appId, newRating)
    } else {
      // TODO : Ideally we'd redirect or show a modal if they weren't logged in
    }
  }

  return (
    <Rate
      count={5}
      style={{
        color: "gold",
      }}
      defaultValue={0}
      value={rating}
      onChange={rate}
    ></Rate>
  )
}

export default Rating
