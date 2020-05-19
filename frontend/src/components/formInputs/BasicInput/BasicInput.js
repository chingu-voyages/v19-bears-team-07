import React from "react"
import { Field } from "formik"
import { Col, Row, Label, Input, FormFeedback, FormGroup } from "reactstrap"

const BasicInput = ({
  componentName,
  label = "",
  type = "text",
  error,
  touched,
  placeholder = "",
}) => (
  <FormGroup>
    <Row>
      <Col md="1">
        <Label for={componentName} style={{ marginTop: ".4em" }}>
          {label}
        </Label>
      </Col>
      <Col md="11">
        <Input
          type={type}
          name={componentName}
          tag={Field}
          component={type === "textarea" && type}
          invalid={error && touched}
          placeholder={placeholder}
        />
        <FormFeedback>{error}</FormFeedback>
      </Col>
    </Row>
  </FormGroup>
)

export default BasicInput
