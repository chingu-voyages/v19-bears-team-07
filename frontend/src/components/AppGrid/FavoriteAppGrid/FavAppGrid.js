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
import "./FavAppGrid.css"
import FavoriteButton from "./FavoriteButton"
import ViewRating from "../../Ratings/ViewRating"

const FavAppGrid = ({ apps, appUrls }) => {
  return (
    <div className={"FavAppGrid-container"}>
      {apps.map((app, index) => (
        <RenderSingleApp app={app} index={index} appUrl={appUrls[index]} />
      ))}
    </div>
  )
}
export default FavAppGrid

const RenderSingleApp = ({
  app: { image, imageUrl, name, description, id, isFavorite, ratings },
  index,
  appUrl,
}) => {
  return (
    <Card className="FavAppGrid-Card" key={index.toString() + "-" + appUrl}>
      <CardImg
        src={image ? image : imageUrl}
        width="100%"
        onClick={event => {
          event.preventDefault()
          navigate(appUrl)
        }}
        className="FavAppGrid-Image"
      />
      <CardBody>
        <CardTitle>Name: {name}</CardTitle>
        <CardText>Description: {description}</CardText>
      </CardBody>
      <CardFooter className={"FavAppGrid-footer"}>
        {
          // If the server didn't send ratings, that's okay. We don't expect that all pages will provide
          // valid ratings
          ratings ? <ViewRating distribution={ratings}></ViewRating> : null
        }
        <FavoriteButton appId={id} isFavorite={isFavorite} />
      </CardFooter>
    </Card>
  )
}
