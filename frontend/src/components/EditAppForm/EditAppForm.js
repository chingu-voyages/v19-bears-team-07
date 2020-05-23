import React from "react"

import * as forBackend from "../../shared/convertForBackend"
import putApp from "../../shared/fetchActions/putApp"
import postTag from "../../shared/fetchActions/postTag"
import separateTags from "./separateTags"

import AppForm from "../AppForm/AppForm"

const EditApp = ({ app, getAppData }) => {
  app.github = app.githubUrl
  const submitData = async values => {
    try {
      const valuesToPut = await forBackend.convertApp(values)
      valuesToPut.id = app.id
      const { id: app_id } = await putApp(valuesToPut)
      await getAppData()
      const tagsForPost = separateTags(values.tags)
      await tagsForPost.forEach(async tag => {
        await postTag({ name: tag, app_id })
      })
    } catch (e) {
      console.log(e)
    }
  }
  return <AppForm formMode="edit" initialValues={app} submitForm={submitData} />
}
export default EditApp
