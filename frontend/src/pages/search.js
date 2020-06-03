import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import { useLocation } from "@reach/router"
import * as forFrontend from "../shared/convertForFrontend"
import getSearchResults from "../shared/fetchActions/getSearchResults"
import { Col, Row } from "reactstrap"
import ViewRating from "../components/Ratings/ViewRating"
import "./search.css"

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
  const { bio, name, image } = dev

  return (
    <div>
      <Row>
        <Col className={"SearchResult-profile"}>
          <img src={image} width={"50px"} height={"50px"}></img>
          <RenderAsText
            text={name.text}
            substrings={name.substrings}
          ></RenderAsText>
        </Col>
        <Col className={"SearchResult-biography"}>
          <RenderAsText substrings={bio.substrings}></RenderAsText>
        </Col>
      </Row>
      <Row>
        {null &&
          apps.map(({ name, description, ratings }, index) => (
            <RenderApp
              name={name}
              description={description}
              ratings={ratings}
              key={index}
            ></RenderApp>
          ))}
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

const RenderApp = ({ name, description, ratings }) => {
  return (
    <Col className={"AppResult-column"}>
      <ViewRating distribution={ratings} />
    </Col>
  )
}
