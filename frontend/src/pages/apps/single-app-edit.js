import React from "react"

import * as forFrontend from "../../shared/convertForFrontend"
import getMyApp from "../../shared/fetchActions/getMyApp"
import EditApp from "../../components/EditAppForm/EditAppForm"

// TODO : If the appId doesn't belong to the user, the page throws an exception.
// TODO: Perhaps need an error handler component in the Layout that catches and logs exceptions, and renders an Exception page.

const SingleAppEdit = ({ appId, ...rest }) => {
  const [app, setApp] = React.useState({})

  React.useEffect(() => {
    getAppData()
  }, [])

  const getAppData = async () => {
    const appData = await getMyApp(appId)
    const convertedAppData = forFrontend.convertApp(appData)
    convertedAppData.id = appId
    setApp(convertedAppData)
  }

  return (
    <div>
      <EditApp app={app} getAppData={getAppData} {...rest} />
    </div>
  )
}

export default SingleAppEdit
