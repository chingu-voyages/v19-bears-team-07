import React from "react"
import { Rate } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import "./AntRate.css"
import "./ViewRating.css"
import RatingDistribution, { calcStats } from "./RatingDistribution"

const ViewRating = ({
  distribution, // object from score keys to counts of ratings in that score
}) => {
  const [showDistribution, setShowDistribution] = React.useState(false)
  const { count, average } = calcStats(distribution)

  const distributionClasses = {
    ["RatingDistribution-containerHide"]: !showDistribution,
    ["RatingDistribution-containerShow"]: showDistribution,
  }

  return (
    <div className={"ViewRating-container"}>
      <div
        className="ViewRating-starsContainer"
        onMouseEnter={() => {
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
        <FontAwesomeIcon
          className={"ViewRating-more"}
          icon={faChevronDown}
        ></FontAwesomeIcon>
        <RatingDistribution
          distribution={distribution}
          classes={distributionClasses}
        ></RatingDistribution>
      </div>
      <span>{count} ratings</span>
    </div>
  )
}

export default ViewRating
