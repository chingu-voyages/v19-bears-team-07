import * as Url from "../urls"

const deleteApp = async appId => {
  // TODO : This should delete from the /me endpoint, to ensure the user doing the deleting actually *owns* the app
  // TODO : Unfortunately that isn't merged in just yet.
  const request = new Request(Url.singleApp(appId), {
    method: "DELETE",
    credentials: "include",
  })
  const response = fetch(request)
  return response // Nothing meaningful expected
}

export default deleteApp
