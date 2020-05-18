import React from "react"
import { navigate } from "gatsby"

import "./AppGrid.css"

import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"

export const AppGrid = props => {
  const { apps, className } = props

  return (
    <div className={"AppGrid-container" + (className ? " " + className : "")}>
      {renderApps()}
    </div>
  )

  function renderApps() {
    const cards = apps.map((app, index) => {
      const { image, imageUrl, name, description, url } = app
      return (
        <Card
          onClick={() => navigate(url)}
          className={"AppGrid-Card"}
          key={index.toString() + "-" + url}
        >
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
