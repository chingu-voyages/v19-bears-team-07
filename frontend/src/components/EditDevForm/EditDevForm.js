import React, { useRef } from "react"
import { Formik, Form } from "formik"
import { FormGroup, Container, Button } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import NameInput from "../formInputs/NameInput/NameInput"
import BioInput from "../formInputs/BioInput/BioInput"
import GithubInput from "../formInputs/GithubInput/GithubInput"
import TwitterInput from "../formInputs/TwitterInput/TwitterInput"
import LinkedinInput from "../formInputs/LinkedinInput/LinkedinInput"
import ImageInput from "../formInputs/ImageInput/ImageInput"
import validationSchema from "./validationSchema"
import updateProfile from "../../shared/fetchActions/updateProfile"

const EditDevForm = ({ initialValues, userId, onSubmit }) => {
  const imageRef = useRef(null)
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          await updateProfile(await mapFromUser(values), userId)
        } catch (e) {
          console.log(e)
        }
        imageRef.current.value = ""
        setSubmitting(false)
        onSubmit()
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
              {renderProgress(isSubmitting)}
            </Container>
          </FormGroup>
        </Form>
      )}
    </Formik>
  )

  function renderProgress(isSubmitting) {
    if (isSubmitting) {
      return <div>Submitting...</div>
    } else {
      return <div>Done submitting</div>
    }
  }
}

const mapFromUser = async user => {
  const result = await new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = event => {
      resolve(event.target.result)
    }
    reader.onabort = event => {
      resolve(null)
    }
    reader.onerror = event => {
      resolve(null)
    }

    try {
      reader.readAsDataURL(user.image)
    } catch (e) {
      resolve(null)
    }
  })

  return {
    name: user.name,
    img: result ? result : undefined,
    dev_bio: user.bio,
    dev_twitter: user.twitter,
    dev_github: user.github,
    dev_linkedin: user.linkedin,
  }
}

export default EditDevForm
