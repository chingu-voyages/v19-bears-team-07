import * as Url from "../urls"

const updateRating = async (appId, rating) => {
  const req = new Request(Url.myAppRatings(appId), {
    method: "PUT",
    credentials: "include",
    body: JSON.stringify({
      score: rating,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })

  const response = await fetch(req)
  return response
}

export default updateRating
