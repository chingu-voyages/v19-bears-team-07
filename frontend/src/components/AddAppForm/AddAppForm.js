import React, { useContext } from "react"

import UserContext from "../../shared/UserContext"
import * as forBackend from "../../shared/convertForBackend"
import postApp from "../../shared/fetchActions/postApp"
import formInitialValues from "./formInitialValues"

import AppForm from "../AppForm/AppForm"

const AddApp = () => {
  const { userId } = useContext(UserContext)
  const submitData = async values => {
    try {
      values.userId = parseInt(userId)
      const valuesToPost = await forBackend.convertApp(values)
      await postApp(valuesToPost)
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
