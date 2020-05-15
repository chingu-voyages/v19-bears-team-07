import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

import { BACKEND_HOST } from "../shared/urls"
import { EditDevForm } from "../components/edit-dev"

const initial = {
  name: "",
  bio: "",
  image: "",
  github: "",
  twitter: "",
  linkedin: "",
}

const ProfilePage = () => {
  const userId = 1

  const [initialValues, setInitialValues] = React.useState(initial)
  const [refreshCount, setRefreshCount] = React.useState(0)

  React.useEffect(() => {
    ;(async () => {
      const user = await fetchUser(userId)
      setInitialValues(user)
    })()
  }, [refreshCount])

  return (
    <Layout>
      <SEO title="Profile Page" />
      <h1>profile page</h1>
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
