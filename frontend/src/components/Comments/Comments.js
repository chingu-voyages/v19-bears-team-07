import React from "react"

import classNames from "classnames"

import { Container, Row, Col, Media } from "reactstrap"

import moment from "moment"
import "./Comments.css"
import { Link } from "gatsby"

export const Comments = ({ comments = [], className = "" }) => {
  return (
    <Container
      className={classNames("Comments-container", {
        [className.toString()]: className,
      })}
    >
      {renderCards()}
    </Container>
  )

  function renderCards() {
    return comments.map(
      ({ username, user_id, text, timestamp, avatar }, index) => {
        const className = classNames({
          ["Comment-container"]: index !== comments.length - 1,
          ["Comment-containerLast"]: index === comments.length - 1,
        })

        return (
          <Row
            className={className}
            key={username.toString() + "-" + timestamp.toString()}
          >
            <Col className={"Comment-column"}>
              <Row className={"Comment-header"}>
                {`${moment(timestamp.toString()).format("MMM Do, h:mm A")}`}
              </Row>
              <Row className={"Comment-header"}>
                <Media body>
                  <Link to={`portfolios/${user_id}`} className={"Comment-user"}>
                    {`${username}`}
                  </Link>
                  {` wrote:`}
                </Media>
              </Row>
              <Row className={"Comment-body"}>
                <Media>
                  <Media left>
                    <Media
                      object
                      data-src={avatar}
                      src={avatar}
                      alt={"Avatar"}
                      className={"Comment-avatar"}
                    ></Media>
                  </Media>
                  <Media body>{text.toString()}</Media>
                </Media>
              </Row>
            </Col>
          </Row>
        )
      }
    )
  }
}

export default Comments
