import React from "react"

const APortfolioPage = props => {
  const { userId } = props

  return <div>Whoa, Nelly! {userId.toString()}</div>
}

export default APortfolioPage
