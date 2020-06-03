import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import { useLocation } from "@reach/router"
import * as forFrontend from "../shared/convertForFrontend"
import getSearchResults from "../shared/fetchActions/getSearchResults"
import { Col, Row, Card, CardImg, CardBody, CardFooter } from "reactstrap"
import ViewRating from "../components/Ratings/ViewRating"
import "./search.css"
import { navigate } from "gatsby"

const queryString = require("query-string")

const SearchPage = () => {
  return (
    <Layout>
      <SEO title="Search Page" />
      <h1>search</h1>
      <SearchResults></SearchResults>
    </Layout>
  )
}

export default SearchPage

const SearchResults = () => {
  const location = useLocation()

  const [results, setResults] = React.useState([])

  const refreshResults = async () => {
    const parsed = queryString.parse(location.search)
    const results = (await getSearchResults(parsed)).map(
      forFrontend.convertSearch
    )
    setResults(results)
    console.log(results)
  }

  React.useEffect(() => {
    refreshResults()
  }, [location])

  return (
    <div>
      {results.map((result, index) => (
        <SearchResult
          key={index}
          dev={result.dev}
          apps={result.apps}
        ></SearchResult>
      ))}
    </div>
  )
}

const SearchResult = ({ dev, apps }) => {
  // These are the lines of the bio, name, and image that are meant to be displayed, together
  // with the location of the match
  const { bio, name, image, url } = dev

  return (
    <div className={"SearchResult-Container"}>
      <Row className={"SearchResult-DevRow"}>
        <Col xs={6} sm={6} md={6} lg={3} xl={3}>
          <div
            className={"SearchResult-profileContainer"}
            onClick={() => {
              navigate(url)
            }}
          >
            <img src={image} width={"70%"} height={"70%"}></img>
            <div className={"SearchResult-profileName"}>
              <RenderAsText
                text={name.text}
                substrings={name.substrings}
              ></RenderAsText>
            </div>
          </div>
        </Col>
        <Col xs={6} sm={6} md={6} lg={9} xl={9}>
          <RenderAsText substrings={bio.substrings}></RenderAsText>
        </Col>
      </Row>
      <Row className={"SearchResult-AppsRow"}>
        <Col xs={0} sm={0} md={0} lg={3} xl={3}></Col>
        <Col xs={12} sm={12} md={12} lg={9} xl={9}>
          <Row>
            {apps.map(({ name, description, rating, url, image }, index) => (
              <RenderApp
                name={name}
                description={description}
                rating={rating}
                key={index}
                url={url}
                image={image}
              ></RenderApp>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  )
}

// Splits up the text at the matching points and bolds them
const RenderAsText = ({ substrings }) => {
  return (
    <React.Fragment>
      {substrings.map(({ text: substring, isMatch }, index) => {
        if (isMatch) {
          return (
            <span
              key={index}
              className={"SearchResult-matchedText SearchResult-text"}
            >
              {substring}
            </span>
          )
        } else {
          return (
            <span key={index} className={"SearchResult-text"}>
              {substring}
            </span>
          )
        }
      })}
    </React.Fragment>
  )
}

const RenderApp = ({ url, name, description, image, rating }) => {
  console.log("IMAGE: " + image)
  return (
    <Col className={"AppResult-column"} xs={12} sm={12} md={6} lg={4} xl={4}>
      <Card className={"AppResult-Card"}>
        <CardImg top height={"100px"} src={image} alt={name.text}></CardImg>
        <CardBody>
          <RenderAsText
            text={name.text}
            substrings={name.substrings}
          ></RenderAsText>
        </CardBody>
        <CardFooter>
          <ViewRating distribution={rating} displayFull={false} />
        </CardFooter>
      </Card>
    </Col>
  )
}
