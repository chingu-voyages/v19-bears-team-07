import React from "react"
import BasicInput from "../BasicInput/BasicInput"

const NameInput = props => (
  <BasicInput componentName="name" label="name" type="text" {...props} />
)

export default NameInput
