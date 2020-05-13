const basicMenu = [
  {
    title: "Favorite Apps",
    target: "favorite-apps",
  },
  {
    title: "Settings",
    target: "settings",
  },
]

const developerMenu = [
  {
    title: "Profile page",
    target: "profile-page",
  },
  {
    title: "Manage apps",
    target: "manage-apps",
  },
  {
    title: "+ New App",
    target: "new-app",
  },
]

const appsMenu = [
  {
    title: "games",
    target: "apps/games",
  },
  {
    title: "productivity",
    target: "apps/productivity",
  },
  {
    title: "shopping",
    target: "apps/shopping",
  },
]

const devsMenu = [
  {
    title: "rails",
    target: "devs/rails",
  },
  {
    title: "react",
    target: "devs/react",
  },
  {
    title: "vue",
    target: "devs/vue",
  },
]

export const asDeveloperMenus = [
  { title: "Basic", items: basicMenu },
  { title: "Developer", items: developerMenu },
]
export const asLoggedOutMenus = [
  { title: "apps", items: appsMenu },
  { title: "devs", items: devsMenu },
]
