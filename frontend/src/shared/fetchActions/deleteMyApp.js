import * as Url from "../urls"

const deleteMyApp = async appId => {
  const request = new Request(Url.myApp(appId), {
    method: "DELETE",
    credentials: "include",
  })
  const response = fetch(request)
  return response // Nothing meaningful expected
}

export default deleteMyApp
