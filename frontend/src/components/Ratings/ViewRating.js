import React from "react"
import { Rate } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import "./AntRate.css"
import "./ViewRating.css"
import RatingDistributionPopup, { calcStats } from "./RatingDistribution"

const ViewRating = ({
  distribution, // object from score keys to counts of ratings in that score
  displayFull = true,
}) => {
  const [showDistribution, setShowDistribution] = React.useState(false)
  const [showDistributionAbove, setShowDistributionAbove] = React.useState(
    false
  )
  const { count, average } = calcStats(distribution)

  const distanceFromBottom = event => {
    var windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
    var distanceFromTop = event.target.getBoundingClientRect().top
    console.log(windowHeight)
    console.log(distanceFromTop)
    return Math.abs(windowHeight - distanceFromTop)
  }

  return (
    <div className={"ViewRating-container"}>
      <div
        className="ViewRating-starsContainer"
        onMouseEnter={event => {
          if (distanceFromBottom(event) < 180) {
            setShowDistributionAbove(true)
          } else {
            setShowDistributionAbove(false)
          }
          setShowDistribution(true)
        }}
        onMouseLeave={() => {
          setShowDistribution(false)
        }}
      >
        <Rate
          className={"ViewRating-stars"}
          allowHalf
          count={5}
          style={{
            color: "gold",
          }}
          disabled
          defaultValue={0}
          value={average}
        ></Rate>
        {displayFull ? (
          <FontAwesomeIcon
            className={"ViewRating-more"}
            icon={faChevronDown}
          ></FontAwesomeIcon>
        ) : null}
        <RatingDistributionPopup
          distribution={distribution}
          above={showDistributionAbove}
          show={showDistribution}
        ></RatingDistributionPopup>
      </div>
      <span>{displayFull ? `${count} ratings` : null}</span>
    </div>
  )
}

export default ViewRating
