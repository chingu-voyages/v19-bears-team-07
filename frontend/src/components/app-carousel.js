import React from "react"
import { navigate } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"
import "./app-carousel.css"

import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"

export const AppCarousel = props => {
  const { apps, className } = props

  return (
    <div
      className={"AppCarousel-container" + (className ? " " + className : "")}
    >
      {renderApps()}
    </div>
  )

  function renderApps() {
    const cards = apps.map((app, index) => {
      const { image, imageUrl, name, description, url } = app
      return (
        <Card onClick={() => navigate(url)} className={"AppCarousel-Card"}>
          <CardImg src={image ? image : imageUrl} width={"100%"}></CardImg>
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>{description}</CardText>
          </CardBody>
        </Card>
      )
    })
    return <React.Fragment>{cards}</React.Fragment>
  }
}
