import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import { useLocation } from "@reach/router"
import * as forFrontend from "../shared/convertForFrontend"
import getSearchResults from "../shared/fetchActions/getSearchResults"
import {
  Col,
  Row,
  Card,
  CardImg,
  CardBody,
  CardFooter,
  Table,
} from "reactstrap"
import ViewRating from "../components/Ratings/ViewRating"
import "./search.css"
import { navigate } from "gatsby"
import classNames from "classnames"

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
  const [loaded, setLoaded] = React.useState(false)

  const refreshResults = async () => {
    const parsed = queryString.parse(location.search)
    const results = (await getSearchResults(parsed)).map(
      forFrontend.convertSearch
    )
    setResults(results)
  }

  React.useEffect(() => {
    ;(async () => {
      await refreshResults()
      setLoaded(true)
    })()
  }, [location])

  if (!loaded) {
    return null
  }

  if (results.length > 0) {
    return (
      <div>
        <h5>{`Showing ${results.length} of ${results.length} results`}</h5>
        {results.map((result, index) => (
          <SearchResult
            key={index}
            dev={result.dev}
            apps={result.apps}
          ></SearchResult>
        ))}
      </div>
    )
  } else {
    return (
      <div>
        <h5>Your search did not return any results</h5>
      </div>
    )
  }
}

const SearchResult = ({ dev, apps }) => {
  // These are the lines of the bio, name, and image that are meant to be displayed, together
  // with the location of the match
  const { bio, name, image, url } = dev

  return (
    <div className={"SearchResult-Container"}>
      <Row className={"SearchResult-DevRow"}>
        <Col xs={6} sm={6} md={6} lg={4} xl={4} className={"align-items-start"}>
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
        <Col
          xs={6}
          sm={6}
          md={6}
          lg={8}
          xl={8}
          className={"SearchResult-biographyContainer"}
        >
          <RenderAsText substrings={bio.substrings}></RenderAsText>
        </Col>
      </Row>
      <Row className={"SearchResult-AppsRow"}>
        <Col xs={0} sm={0} md={0} lg={4} xl={4}>
          <Table
            responsive
            bordered
            striped
            className={"SearchResult-AppsTable"}
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>% Match</th>
              </tr>
            </thead>
            <tbody>
              {apps.map(({ name, score }, index) => (
                <tr key={name + index.toString()}>
                  <td>{name.text}</td>
                  <td>{+(100 * score).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col xs={12} sm={12} md={12} lg={8} xl={8}>
          <Row>
            {apps.map(({ name, description, rating, url, image }, index) => (
              <RenderApp
                name={name}
                description={description}
                rating={rating}
                key={index}
                url={url}
                image={image}
                index={index}
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

const RenderApp = ({ url, name, image, rating, index }) => {
  const displayClasses = {
    ["d-none"]: index > 0,
    ["d-sm-block"]: index <= 0,
    ["d-md-block"]: index <= 1,
    ["d-lg-block"]: index <= 1,
    ["d-xl-block"]: index <= 2,
  }

  return (
    <Col
      className={classNames("AppResult-column", displayClasses)}
      xs={12}
      sm={12}
      md={6}
      lg={6}
      xl={4}
    >
      <div className={"AppResult-CardRatio"}>
        <Card className={"AppResult-Card"}>
          <CardImg
            className={"AppResult-Image"}
            top
            height={"60%"}
            src={image}
            alt={name.text}
            onClick={() => {
              navigate(url)
            }}
          ></CardImg>
          <CardBody>
            <RenderAsText
              text={name.text}
              substrings={name.substrings}
            ></RenderAsText>
          </CardBody>
          <CardFooter>
            <ViewRating
              distribution={rating}
              displayFull={false}
              displayPopup={false}
            />
          </CardFooter>
        </Card>
      </div>
    </Col>
  )
}
