import React from "react"
import { navigate } from "gatsby"
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"
import "./AppGrid.css"

const AppGrid = ({ apps, urlSelector }) => {
  return (
    <div className={"AppGrid-container"}>
      {apps.map((app, index) => (
        <RenderSingleApp app={app} index={index} urlSelector={urlSelector} />
      ))}
    </div>
  )
}

const RenderSingleApp = ({
  app: { image, imageUrl, name, description, url: defaultUrl },
  app,
  index,
  urlSelector,
}) => {
  const url = urlSelector ? urlSelector(app) : defaultUrl
  return (
    <Card
      onClick={() => navigate(url)}
      className="AppGrid-Card"
      key={index.toString() + "-" + url}
    >
      <CardImg src={image ? image : imageUrl} width={"100%"} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  )
}

export default AppGrid
