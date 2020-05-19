import React from "react"
import { Col, Row, Label, Input, FormFeedback, FormGroup } from "reactstrap"

const ImageInput = React.forwardRef((props, imageRef) => {
  const { setFieldValue, error } = props
  return (
    <FormGroup>
      <Row>
        <Col md="1">
          <Label>img</Label>
        </Col>
        <Col md="11">
          <Input
            name="image"
            type="file"
            onChange={event =>
              setFieldValue("image", event.currentTarget.files[0])
            }
            innerRef={imageRef}
          />
          <FormFeedback>{error}</FormFeedback>
        </Col>
      </Row>
    </FormGroup>
  )
})

export default ImageInput
