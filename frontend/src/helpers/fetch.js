// URLs
export const BACKEND_HOST = "http://localhost:3000"

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

export const ALL_APPS = `${BACKEND_HOST}/apps`
export async function fetchAllApps() {
  try {
    const req = new Request(ALL_APPS, {
      method: "GET",
      credentials: "include",
    })
    return fetchJsonAndParse(req)
  } catch (e) {
    return allTestApps
  }
}

export const AN_APP = appId => `${BACKEND_HOST}/apps/${appId}`
export async function fetchAnApp(appId) {
  try {
    const req = new Request(AN_APP(appId), {
      method: "GET",
      credentials: "include",
    })
    return fetchJsonAndParse(req)
  } catch (e) {
    return allTestApps[0]
  }
}

export const CHECK_LOGGED_IN_URL = `${BACKEND_HOST}/test_login/is_logged_in`
export async function fetchLoggedInUser() {
  const req = new Request(CHECK_LOGGED_IN_URL, {
    method: "GET",
    credentials: "include",
  })
  return fetchJsonAndParse(req)
}

export const A_PORTFOLIO = userId => `${BACKEND_HOST}/users/${userId}/portfolio`
export async function fetchAPortfolio(userId) {
  try {
    const req = new Request(A_PORTFOLIO(userId), {
      method: "GET",
      credentials: "include",
    })

    return fetchJsonAndParse(req)
  } catch (e) {
    return { apps: allTestApps }
  }
}
