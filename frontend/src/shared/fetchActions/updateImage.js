import * as Url from "../urls"

const updateImage = async (userId, formData) => {
  const req = new Request(Url.singleUser(userId), {
    method: "PATCH",
    credentials: "include",
    body: formData,
  })

  const response = await fetch(req)
  return response
}

export default updateImage
