import React from "react"
import { navigate } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"

import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"

export const UserGrid = props => {
  const { users, className } = props

  return (
    <div className={"UserGrid-container" + (className ? " " + className : "")}>
      {renderUsers()}
    </div>
  )

  function renderUsers() {
    const cards = users.map((user, index) => {
      const { image, name, bio, url } = user
      return (
        <Card
          onClick={() => navigate(url)}
          className={"UserGrid-Card"}
          key={index.toString() + "-" + url}
        >
          <CardImg src={image} width={"100%"}></CardImg>
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>{bio}</CardText>
          </CardBody>
        </Card>
      )
    })
    return <React.Fragment>{cards}</React.Fragment>
  }
}
