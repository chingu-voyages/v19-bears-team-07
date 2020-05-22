import React from "react"
import { navigate } from "gatsby"
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"
import "./AppGrid.css"

const AppGrid = ({ apps, appUrls }) => {
  return (
    <div className={"AppGrid-container"}>
      {apps.map((app, index) => (
        <RenderSingleApp app={app} index={index} appUrl={appUrls[index]} />
      ))}
    </div>
  )
}

const RenderSingleApp = ({
  app: { image, imageUrl, name, description },
  index,
  appUrl,
}) => {
  return (
    <Card
      onClick={() => navigate(appUrl)}
      className="AppGrid-Card"
      key={index.toString() + "-" + appUrl}
    >
      <CardImg src={image ? image : imageUrl} width="100%" />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  )
}

export default AppGrid
