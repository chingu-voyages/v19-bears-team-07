import React from "react"

import DeleteApp from "../../components/DeleteApp/DeleteApp"
import { navigate } from "gatsby"
import doDeleteApp from "../../shared/fetchActions/deleteMyApp"
import * as forFrontend from "../../shared/convertForFrontend"
import getMyApp from "../../shared/fetchActions/getMyApp"

// TODO : If the appId doesn't belong to the user, the page throws an exception.
// TODO: Perhaps need an error handler component in the Layout that catches and logs exceptions, and renders an Exception page.

const SingleAppEdit = ({ appId }) => {
  const [name, setName] = React.useState(null)

  React.useEffect(() => {
    ;(async () => {
      const appData = await getMyApp(appId)
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
