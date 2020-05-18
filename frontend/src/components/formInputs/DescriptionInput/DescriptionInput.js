import React from "react"
import BasicInput from "../BasicInput/BasicInput"

const DescriptionInput = props => (
  <BasicInput
    componentName="description"
    label="desc"
    type="textarea"
    {...props}
  />
)

export default DescriptionInput
