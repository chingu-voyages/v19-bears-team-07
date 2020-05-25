import React, { useRef } from "react"
import { Formik, Form } from "formik"
import { FormGroup, Container, Button } from "reactstrap"

import NameInput from "../formInputs/NameInput/NameInput"
import BioInput from "../formInputs/BioInput/BioInput"
import GithubInput from "../formInputs/GithubInput/GithubInput"
import TwitterInput from "../formInputs/TwitterInput/TwitterInput"
import LinkedinInput from "../formInputs/LinkedinInput/LinkedinInput"
import ImageInput from "../formInputs/ImageInput/ImageInput"
import validationSchema from "./validationSchema"
import updateProfile from "../../shared/fetchActions/updateProfile"
import * as forBackend from "../../shared/convertForBackend"

const EditDevForm = ({ initialValues, userId, refreshUserData }) => {
  const imageRef = useRef(null)
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const updatedUser = await forBackend.convertUser(values)
          await updateProfile(updatedUser, userId)

          // image patch to active storage
          const formData = new FormData()
          formData.append("user", JSON.stringify(values))
          formData.append("image", values.image)
          fetch(`${process.env.GATSBY_BACKEND_URL}/users/${userId}`, {
            method: "PATCH",
            credentials: "include",
            body: formData,
          })
            .then(res => res.json())
            .then(data => console.log(data))
        } catch (e) {
          console.log(e)
        }
        imageRef.current.value = ""
        setSubmitting(false)
        refreshUserData()
      }}
      validationSchema={validationSchema}
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
              <GithubInput error={errors.github} touched={touched.github} />
              <TwitterInput error={errors.twitter} touched={touched.twitter} />
              <LinkedinInput
                error={errors.linkedin}
                touched={touched.linkedin}
              />
              <Button type="submit" color="primary" disabled={isSubmitting}>
                Submit
              </Button>
              {isSubmitting ? <div>Submitting...</div> : <div></div>}
            </Container>
          </FormGroup>
        </Form>
      )}
    </Formik>
  )
}

export default EditDevForm
