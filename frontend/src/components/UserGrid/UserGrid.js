import React from "react"
import { navigate } from "gatsby"
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const UserGrid = ({ users }) => (
  <div className={"UserGrid-container"}>
    <RenderUsers users={users} />
  </div>
)

const RenderUsers = ({ users }) => (
  <React.Fragment>
    {users.map((user, index) => (
      <RenderSingleUser user={user} index={index} />
    ))}
  </React.Fragment>
)

const RenderSingleUser = ({ user: { image, name, bio, url }, index }) => (
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

export default UserGrid
