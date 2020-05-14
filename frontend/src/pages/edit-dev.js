import React, { useRef, useState } from "react"
import { Formik, Form } from "formik"
import { FormGroup, Col, Container, Button, Modal, ModalBody } from "reactstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import BasicInput from "../components/AddApp/BasicInput/BasicInput"
import ImageInput from "../components/AddApp/ImageInput/ImageInput"
import { EditDevSchema } from "../components/AddApp/formSchema"
import { BACKEND_HOST } from "./login"

const initial = {
  name: "",
  bio: "",
  image: "",
  github: "",
  twitter: "",
  linkedin: "",
}

const EditDevPage = () => {
  const userId = 1

  const [initialValues, setInitialValues] = useState(initial)

  React.useEffect(() => {
    ;(async () => {
      const user = await fetchUser(userId)
      console.log(user)
      setInitialValues(user)
    })()
  }, [])

  return (
    <div>
      <EditDevForm initialValues={initialValues} userId={userId}></EditDevForm>
    </div>
  )
}

export default EditDevPage

const EditDevForm = props => {
  const { initialValues, userId } = props

  const imageRef = useRef(null)
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          await submit(values, userId)
          console.log(values)
        } catch (e) {
          console.log(e)
        }
        resetForm(initial)
        imageRef.current.value = ""
        setSubmitting(false)
      }}
      validationSchema={EditDevSchema}
    >
      {({ errors, touched, isSubmitting, setFieldValue }) => (
        <Form>
          <FormGroup>
            <Container>
              <input type="hidden" value="for disrupting autocomplete" />
              <NameInput error={errors.name} touched={touched.name}></NameInput>
              <BioInput error={errors.bio} touched={touched.bio}></BioInput>
              <ImageInput
                ref={imageRef}
                setFieldValue={setFieldValue}
                errors={errors.picture}
                touched={touched.picture}
              />
              <UrlInput
                label={"github"}
                error={errors.github}
                touched={touched.github}
              ></UrlInput>
              <UrlInput
                label={"twitter"}
                error={errors.twitter}
                touched={touched.twitter}
              ></UrlInput>
              <UrlInput
                label={"linkedin"}
                error={errors.linkedin}
                touched={touched.linkedin}
              ></UrlInput>
              <Button type="submit" color="primary" disabled={isSubmitting}>
                Submit
              </Button>
            </Container>
          </FormGroup>
        </Form>
      )}
    </Formik>
  )
}

const NameInput = props => (
  <BasicInput componentName="name" label="name" type="text" {...props} />
)

const BioInput = props => (
  <BasicInput componentName="bio" label="bio" type="textarea" {...props} />
)

const UrlInput = props => {
  const { label, ...rest } = props
  return (
    <BasicInput componentName={label} label={label} type="text" {...rest} />
  )
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

const mapFromUser = async user => {
  return {
    name: user.name,
    img: user.image.text ? await user.image.text() : "",
    dev_bio: user.bio,
    dev_twitter: user.twitter,
    dev_github: user.github,
    dev_linkedin: user.linkedin,
  }
}

const url = userId => `${BACKEND_HOST}/users/${userId}`
const submit = async (values, userId) => {
  const mapped = await mapFromUser(values)
  console.log(mapped)
  const req = new Request(url(userId), {
    method: "PATCH",
    credentials: "include",
    body: JSON.stringify(mapped),
  })

  return fetch(req)
}
