import React from "react"
import { Rate } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import * as classNames from "classnames"
import "antd/dist/antd.css"
import "./Rating.css"

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

const calcStats = distribution => {
  const count = Object.keys(distribution).reduce((acc, keyVal) => {
    return acc + distribution[keyVal]
  }, 0)
  const totalStars = Object.keys(distribution).reduce((acc, keyVal) => {
    return acc + parseInt(keyVal) * distribution[keyVal]
  }, 0)
  const average = count === 0 ? 5 : +(totalStars / count).toFixed(2)

  return {
    count,
    average,
  }
}

export default ViewRating

const RatingDistribution = ({ distribution, classes }) => {
  const { count, average } = calcStats(distribution)

  return (
    <div className={classNames("RatingDistribution-container", classes)}>
      <span className={"RatingDistribution-containerShowCaret"}></span>
      <div className={"RatingDistribution-header"}>
        <Rate
          className={"RatingDistribution-ratingStars"}
          count={5}
          style={{
            color: "gold",
          }}
          disabled
          defaultValue={0}
          value={average}
        ></Rate>
        <span className={"RatingDistribution-ratingText"}>
          {average} out of 5
        </span>
      </div>
      <span className={"RatingDistribution-ratingCount"}>{count} ratings</span>
      {Object.keys(distribution)
        .sort((a, b) => parseInt(a) - parseInt(b))
        .map((key, index) => {
          const percent =
            count === 0
              ? "0%"
              : `${+Math.round((100 * distribution[key]) / count)}%`

          return (
            <div
              className={"RatingDistribution-row"}
              key={index}
              style={{ backgroundColor: "white" }}
            >
              <span className={"RatingDistribution-stars"}>{key} star</span>
              <div className={"RatingDistribution-percentContainer"}>
                <div
                  className={"RatingDistribution-percentChild"}
                  style={{
                    width: percent,
                  }}
                ></div>
              </div>
              <span className={"RatingDistribution-percent"}>{percent}</span>
            </div>
          )
        })}
    </div>
  )
}
