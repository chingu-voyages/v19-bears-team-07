import React from "react"
import { navigate } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"
import "./app-grid.css"

import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"

export const AppGrid = ({ apps, className, urlSelector }) => {
  return (
    <div className={"AppGrid-container" + (className ? " " + className : "")}>
      {renderApps()}
    </div>
  )

  function renderApps() {
    const cards = apps.map((app, index) => {
      const { image, imageUrl, name, description, url: defaultUrl } = app
      const url = urlSelector ? urlSelector(app) : defaultUrl
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

export default AppGrid
