const basicMenu = [
  {
    title: "favorite apps",
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
  { title: "all", target: "apps" },
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
  { title: "all", target: "portfolios" },
  {
    title: "rails",
    target: "/portfolios/rails",
  },
  {
    title: "react",
    target: "/portfolios/react",
  },
  {
    title: "vue",
    target: "/portfolios/vue",
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
