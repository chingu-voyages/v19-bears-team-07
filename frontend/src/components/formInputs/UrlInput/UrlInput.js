import React from "react"

import BasicInput from "../BasicInput/BasicInput"

const UrlInput = props => {
  const { label, ...rest } = props
  return (
    <BasicInput componentName={label} label={label} type="text" {...rest} />
  )
}

export default UrlInput
