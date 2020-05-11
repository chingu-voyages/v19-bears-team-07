import React from "react"
import { Field } from "formik"
import { Col, Row, Label, Input, FormFeedback } from "reactstrap"

const BasicInput = ({
  componentName,
  label = "",
  type = "text",
  error,
  touched,
  placeholder = "",
}) => (
  <Row>
    <Col md="2">
      <Label for={componentName} style={{ marginTop: ".4em" }}>
        {label}
      </Label>
    </Col>
    <Col md="10">
      <Input
        type={type}
        name={componentName}
        tag={Field}
        invalid={error && touched}
        autoComplete="off"
        placeholder={placeholder}
      />
      <FormFeedback>{error}</FormFeedback>
    </Col>
  </Row>
)

export default BasicInput
