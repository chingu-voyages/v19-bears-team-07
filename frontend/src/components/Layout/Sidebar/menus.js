const basicMenu = [
  {
    title: "favorite Apps",
    target: "favorite-apps",
  },
  {
    title: "settings",
    target: "settings",
  },
]

const developerMenu = [
  {
    title: "profile page",
    target: "profile",
  },
  {
    title: "manage apps",
    target: "manage-apps",
  },
  {
    title: "+ new app",
    target: "add-app",
  },
]

const appsMenu = [
  {
    title: "games",
    target: "/apps/games",
  },
  {
    title: "productivity",
    target: "/apps/productivity",
  },
  {
    title: "shopping",
    target: "/apps/shopping",
  },
]

const devsMenu = [
  {
    title: "rails",
    target: "/devs/rails",
  },
  {
    title: "react",
    target: "/devs/react",
  },
  {
    title: "vue",
    target: "/devs/vue",
  },
]

export const asDeveloperMenus = [
  { title: "basic", items: basicMenu },
  { title: "developer", items: developerMenu },
  { title: "apps", items: appsMenu },
  { title: "devs", items: devsMenu },
]
export const asLoggedOutMenus = [
  { title: "apps", items: appsMenu },
  { title: "devs", items: devsMenu },
]
