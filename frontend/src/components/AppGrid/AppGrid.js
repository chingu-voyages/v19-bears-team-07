import React from "react"
import { navigate } from "gatsby"
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"
import "./AppGrid.css"

const AppGrid = ({ apps }) => {
  return (
    <div className={"AppGrid-container"}>
      <RenderApps apps={apps} />
    </div>
  )
}

const RenderApps = ({ apps }) => {
  return (
    <React.Fragment>
      {apps.map((app, index) => (
        <RenderSingleApp app={app} index={index} />
      ))}
    </React.Fragment>
  )
}

const RenderSingleApp = ({
  app: { image, imageUrl, name, description, url },
  index,
}) => (
  <Card
    onClick={() => navigate(url)}
    className={"AppGrid-Card"}
    key={index.toString() + "-" + url}
  >
    <CardImg src={image ? image : imageUrl} width={"100%"} />
    <CardBody>
      <CardTitle>{name}</CardTitle>
      <CardText>{description}</CardText>
    </CardBody>
  </Card>
)

export default AppGrid
