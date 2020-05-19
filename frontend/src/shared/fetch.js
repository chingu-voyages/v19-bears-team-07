import * as Url from "./urls"

// TODO: Figure out how to configure fetching logic according to environment : dev, test, or prod
const allTestApps = [
  {
    name: "Facebook",
    description: "The world's leading social media platform",
    image: undefined,
    github_url: "http://www.github.com",
    app_url: "http://www.app.com",
    id: 1,
  },
  {
    name: "Facebook",
    description: "The world's leading social media platform",
    image: undefined,
    github_url: "http://www.github.com",
    app_url: "http://www.app.com",
    id: 1,
  },
  {
    name: "Facebook",
    description: "The world's leading social media platform",
    image: undefined,
    github_url: "http://www.github.com",
    app_url: "http://www.app.com",
    id: 1,
  },
  {
    name: "Facebook",
    description: "The world's leading social media platform",
    image: undefined,
    github_url: "http://www.github.com",
    app_url: "http://www.app.com",
    id: 1,
  },
]

async function fetchJsonAndParse(req) {
  const response = await fetch(req)
  const parsed = await response.json()
  return parsed
}

export async function fetchAllApps() {
  try {
    const req = new Request(Url.ALL_APPS, {
      method: "GET",
      credentials: "include",
    })
    return fetchJsonAndParse(req)
  } catch (e) {
    return allTestApps
  }
}

export async function fetchApp(appId) {
  try {
    const req = new Request(Url.singleApp(appId), {
      method: "GET",
      credentials: "include",
    })
    return fetchJsonAndParse(req)
  } catch (e) {
    return allTestApps[0]
  }
}

export async function fetchLoggedInUser() {
  const req = new Request(Url.CHECK_LOGGED_IN_URL, {
    method: "GET",
    credentials: "include",
  })
  return fetchJsonAndParse(req)
}

export async function fetchPortfolio(userId) {
  try {
    const req = new Request(Url.singlePortfolio(userId), {
      method: "GET",
      credentials: "include",
    })

    return await fetchJsonAndParse(req)
  } catch (e) {
    return { apps: allTestApps }
  }
}

export async function fetchAllUsers() {
  const req = new Request(Url.ALL_USERS, {
    method: "GET",
    credentials: "include",
  })

  return fetchJsonAndParse(req)
}

export const checkLoggedInRequest = () => {
  const request = new Request(Url.CHECK_LOGGED_IN_URL, {
    method: "GET",
    credentials: "include",
  })
  return fetchJsonAndParse(request)
}

export const logoutRequest = () => {
  const request = new Request(Url.LOG_OUT_URL, {
    method: "DELETE",
    credentials: "include",
  })
  //No meaningful response currently expected.
  return fetch(request)
}

export const fetchUser = async userId => {
  const req = new Request(Url.singleUser(userId), {
    method: "GET",
    credentials: "include",
  })
  return fetchJsonAndParse(req)
}

export const updateProfileRequest = async (values, userId) => {
  const req = new Request(Url.singleUser(userId), {
    method: "PATCH",
    credentials: "include",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  })

  return fetch(req)
}
