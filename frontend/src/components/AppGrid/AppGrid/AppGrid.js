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
import ViewRating from "../Ratings/ViewRating"

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

export default AppGrid

const RenderSingleApp = ({
  app: { image, imageUrl, name, description, ratings },
  appUrl,
}) => {
  return (
    <Card onClick={() => navigate(appUrl)} className="AppGrid-Card">
      <CardImg src={image ? image : imageUrl} width="100%" />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        {
          // If the server didn't send ratings, that's okay. We don't expect that all pages will provide
          // valid ratings
          ratings ? <ViewRating distribution={ratings}></ViewRating> : null
        }
      </CardFooter>
    </Card>
  )
}
