import React from "react"

import DeleteApp from "../../components/DeleteApp/DeleteApp"
import { navigate } from "gatsby"
import doDeleteApp from "../../shared/fetchActions/deleteApp"
import * as forFrontend from "../../shared/convertForFrontend"
import getSingleApp from "../../shared/fetchActions/getSingleApp"

const SingleAppEdit = ({ appId }) => {
  const [name, setName] = React.useState(null)

  React.useEffect(() => {
    ;(async () => {
      const appData = await getSingleApp(appId)
      const app = forFrontend.convertApp(appData)
      setName(app.name)
    })()
  }, [appId])

  const deleteApp = async () => {
    await doDeleteApp(appId)
    navigate("manage-apps")
  }

  return (
    <div>
      <DeleteApp name={name} deleteApp={deleteApp}></DeleteApp>
    </div>
  )
}

export default SingleAppEdit
