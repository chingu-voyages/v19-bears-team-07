import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

import { BACKEND_HOST } from "../shared/urls"
import { EditDevForm } from "../components/edit-dev"
import { Container, Media } from "reactstrap"
import { UserContext } from "../shared/UserContext"

const initial = {
  name: "",
  bio: "",
  image: "",
  github: "",
  twitter: "",
  linkedin: "",
}

const ProfilePage = () => {
  // TODO: the user id should be available through the context
  const { userId, loggedIn } = React.useContext(UserContext)
  console.log(userId)
  console.log(loggedIn)

  const [initialValues, setInitialValues] = React.useState(initial)
  const [refreshCount, setRefreshCount] = React.useState(0)

  React.useEffect(() => {
    ;(async () => {
      if (loggedIn && userId) {
        const user = await fetchUser(userId)
        setInitialValues(user)
      }
    })()
  }, [refreshCount, userId, loggedIn])

  if (!loggedIn || !userId) {
    // If we're not logged in, this page doesn't display. Or it should show an error
    return <Layout></Layout>
  }

  return (
    <Layout>
      <SEO title="Profile Page" />
      <h1>profile page</h1>
      <Container>{renderImage()}</Container>
      <div>
        <EditDevForm
          initialValues={initialValues}
          userId={userId}
          onSubmit={() => {
            setRefreshCount(old => old + 1)
          }}
        ></EditDevForm>
      </div>
    </Layout>
  )

  function renderImage() {
    if (initialValues.image) {
      return (
        <img
          src={initialValues.image}
          alt={"Your profile image"}
          width={200}
          height={200}
        ></img>
      )
    } else {
      return null
    }
  }
}

export default ProfilePage

const fetchUser = async userId => {
  const url = `${BACKEND_HOST}/users/${userId}`
  const req = new Request(url, {
    method: "GET",
    credentials: "include",
  })
  const response = await fetch(req)
  const parsed = await response.json()
  return mapAsUser(parsed)
}

const mapAsUser = async userData => {
  return {
    name: userData.name ? userData.name : "",
    image: userData.img ? userData.img : "",
    bio: userData.dev_bio ? userData.dev_bio : "",
    twitter: userData.dev_twitter ? userData.dev_twitter : "",
    github: userData.dev_github ? userData.dev_github : "",
    linkedin: userData.dev_linkedin ? userData.dev_linkedin : "",
  }
}
