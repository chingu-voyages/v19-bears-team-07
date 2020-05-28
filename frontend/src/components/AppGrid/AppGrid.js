import React from "react"
import { navigate } from "gatsby"
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap"
import "./AppGrid.css"

const AppGrid = ({ apps, appUrls }) => {
  return (
    <div className={"AppGrid-container"}>
      {apps.map((app, index) => (
        <RenderSingleApp
          app={app}
          appUrl={appUrls[index]}
          key={index.toString() + "-" + appUrls[index]}
        />
      ))}
    </div>
  )
}

const RenderSingleApp = ({
  app: { image, imageUrl, name, description },
  appUrl,
}) => {
  return (
    <Card onClick={() => navigate(appUrl)} className="AppGrid-Card">
      <CardImg src={image ? image : imageUrl} width="100%" />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  )
}

export default AppGrid
