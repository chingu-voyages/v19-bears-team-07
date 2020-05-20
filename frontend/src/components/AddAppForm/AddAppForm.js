import React, { useContext } from "react"

import UserContext from "../../shared/UserContext"
import * as forBackend from "../../shared/convertForBackend"
import postApp from "../../shared/fetchActions/postApp"
import postTag from "../../shared/fetchActions/postTag"
import formInitialValues from "./formInitialValues"
import separateTags from "./separateTags"

import AppForm from "../AppForm/AppForm"

const AddApp = () => {
  const { userId } = useContext(UserContext)
  const submitData = async values => {
    try {
      values.userId = parseInt(userId)
      const valuesToPost = await forBackend.convertApp(values)
      const { id: app_id } = await postApp(valuesToPost)
      const tagsForPost = separateTags(values.tags)
      await tagsForPost.forEach(async tag => {
        await postTag({ name: tag, app_id })
      })
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <AppForm
      formMode="add"
      initialValues={formInitialValues}
      submitForm={submitData}
    />
  )
}
export default AddApp
