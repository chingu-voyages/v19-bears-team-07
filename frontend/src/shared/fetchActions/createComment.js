import fetchJsonAndParse from "./fetchJsonAndParse"
import * as Url from "../urls"

const createComment = async ({ userId, comment, appId }) => {
  const request = new Request(Url.commentsForApp(appId), {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      title: "",
      description: comment,
      app_id: appId,
      user_id: userId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  const parsed = await fetchJsonAndParse(request)
  return parsed
}

export default createComment
