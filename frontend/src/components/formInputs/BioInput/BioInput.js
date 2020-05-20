import React from "react"

import BasicInput from "../BasicInput/BasicInput"

const BioInput = props => (
  <BasicInput componentName="bio" label="bio" type="textarea" {...props} />
)

export default BioInput
