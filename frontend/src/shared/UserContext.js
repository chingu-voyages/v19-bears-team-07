import { createContext } from "react"

const UserContext = createContext({
  loggedIn: false,
  logout: () => {},
  userId: null,
})

export default UserContext
