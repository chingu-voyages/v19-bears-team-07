import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import { useLocation } from "@reach/router"
import * as forFrontend from "../shared/convertForFrontend"
import getSearchResults from "../shared/fetchActions/getSearchResults"
import { Col, Row } from "reactstrap"
import ViewRating from "../components/Ratings/ViewRating"

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
      {null &&
        results.map(result => (
          <SearchResult dev={result.dev} apps={result.apps}></SearchResult>
        ))}
    </div>
  )
}

const SearchResult = ({ dev, apps }) => {
  const { bio, name, image } = dev

  return (
    <div>
      <Row>
        <Col className={"SearchResult-profile"}></Col>
        <Col className={"SearchResult-biography"}></Col>
      </Row>
      <Row>
        {apps.map(({ name, description, ratings }) => (
          <RenderApp
            name={name}
            description={description}
            ratings={ratings}
          ></RenderApp>
        ))}
      </Row>
    </div>
  )
}

const RenderApp = ({ name, description, ratings }) => {
  return (
    <Col className={"AppResult-column"}>
      <ViewRating distribution={ratings} />
    </Col>
  )
}
