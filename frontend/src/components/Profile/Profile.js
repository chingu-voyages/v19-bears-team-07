import React from "react"
import { Container } from "reactstrap"

import EditDevForm from "../EditDevForm/EditDevForm"
import UserContext from "../../shared/UserContext"
import * as forFrontend from "../../shared/convertForFrontend"
import getSingleUser from "../../shared/fetchActions/getSingleUser"
import defaultUserData from "./defaultUserData"
import "./Profile.css"

const Profile = () => {
  const { userId, loggedIn } = React.useContext(UserContext)

  const [userData, setUserData] = React.useState(defaultUserData)

  React.useEffect(() => {
    ;(async () => {
      if (loggedIn && userId) {
        const userData = await getSingleUser(userId)
        const user = forFrontend.convertUser(userData)
        setUserData(user)
      }
    })()
  }, [userId, loggedIn])

  const refreshUserData = async () => {
    const userData = await getSingleUser(userId)
    const user = forFrontend.convertUser(userData)
    setUserData(user)
  }

  return (
    <React.Fragment>
      {loggedIn && userId && (
        <React.Fragment>
          <Container className={"Profile-imageContainer"}>
            {userData.image && (
              <img src={userData.image} alt="Your profile" width={"30%"} />
            )}
          </Container>
          <div>
            <EditDevForm
              initialValues={userData}
              userId={userId}
              refreshUserData={refreshUserData}
            />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Profile
