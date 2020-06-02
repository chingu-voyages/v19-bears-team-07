import React from "react"

import * as forBackend from "../../shared/convertForBackend"
import putApp from "../../shared/fetchActions/putApp"

import AppForm from "../AppForm/AppForm"

const EditApp = ({ app, getAppData, ...rest }) => {
  app.github = app.githubUrl
  const submitData = async values => {
    try {
      const valuesToPut = await forBackend.convertApp(values)
      valuesToPut.id = app.id
      await putApp(valuesToPut)
      await getAppData()
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <AppForm
      formMode="edit"
      initialValues={app}
      submitForm={submitData}
      {...rest}
    />
  )
}
export default EditApp
