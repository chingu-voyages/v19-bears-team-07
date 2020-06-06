import React from "react"

import * as classNames from "classnames"

import "./PaginatedComments.css"
import * as R from "ramda"
import Comments from "./Comments"
import AddComment from "./AddComment"

export const PaginatedComments = ({
  refreshComments,
  appId,
  comments = [],
}) => {
  const pageMax = 3
  const [current, setCurrent] = React.useState(0)

  const pageOfComments = comments.slice(
    current * pageMax,
    current * pageMax + pageMax
  )
  const pageCount = Math.ceil(comments.length / pageMax)

  return (
    <div>
      <h3>Comments</h3>
      <AddComment refreshComments={refreshComments} appId={appId}></AddComment>
      <div className={"PaginatedComments-pageContainer"}>
        {renderPageSelectors()}
      </div>
      <Comments comments={pageOfComments}></Comments>
      <div className={"PaginatedComments-pageContainer"}>
        {renderPageSelectors()}
      </div>
    </div>
  )

  function renderPageSelectors() {
    let pages = []
    const currentPage = current + 1

    if (pageCount < 10) {
      // If the page count is small, we render all the pages.
      pages = R.range(1, pageCount + 1)
      return pages.map(page => {
        return (
          <span
            className={classNames("PaginatedComments-singlePage", {
              ["PaginatedComments-activePage"]: page - 1 === current,
            })}
            onClick={() => setCurrent(page - 1)}
          >
            {page.toString()}
          </span>
        )
      })
    } else {
      // If the page count is large, we render only the first, last, and surrounding pages.
      const first = [1]
      const middle = R.range(-3, 4)
        .map(n => currentPage + n)
        .filter(page => page > 0 && !(page > pageCount))
      const last = [pageCount]

      pages = R.uniq(first.concat(middle).concat(last))
      return pages.map((page, index) => {
        if (
          Math.abs(page - currentPage) === 3 &&
          page !== 1 &&
          page !== pageCount
        ) {
          return <span className={""}>...</span>
        } else {
          const className = classNames("PaginatedComments-singlePage", {
            ["PaginatedComments-activePage"]: page - 1 === current,
          })
          return (
            <span className={className} onClick={() => setCurrent(page - 1)}>
              {page.toString()}
            </span>
          )
        }
      })
    }
  }
}

export default PaginatedComments
