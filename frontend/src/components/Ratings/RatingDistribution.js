import React from "react"
import { Rate } from "antd"
import * as classNames from "classnames"
import "./AntRate.css"
import "./RatingDistribution.css"

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
          {count === 0 ? null : `${average} out of 5`}
        </span>
      </div>
      <span className={"RatingDistribution-ratingCount"}>{count} ratings</span>
      <Distribution distribution={distribution}></Distribution>
    </div>
  )
}
export default RatingDistribution

export const Distribution = ({ distribution }) => {
  const { count, average } = calcStats(distribution)

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export const calcStats = distribution => {
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
