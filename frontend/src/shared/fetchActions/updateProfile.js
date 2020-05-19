import * as Url from "../urls"

const updateProfile = async (values, userId) => {
  const req = new Request(Url.singleUser(userId), {
    method: "PATCH",
    credentials: "include",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  })

  const response = await fetch(req)
  return response
}

export default updateProfile
