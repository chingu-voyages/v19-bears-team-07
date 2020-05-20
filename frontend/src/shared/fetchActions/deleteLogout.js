import * as Url from "../urls"

const deleteLogout = async () => {
  const request = new Request(Url.LOG_OUT, {
    method: "DELETE",
    credentials: "include",
  })
  const response = fetch(request)
  return response // Nothing meaningful expected
}

export default deleteLogout
