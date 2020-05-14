import React, { useRef, useState } from "react"
import { Formik, Form } from "formik"
import { FormGroup, Col, Container, Button, Modal, ModalBody } from "reactstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import BasicInput from "../components/AddApp/BasicInput/BasicInput"
import ImageInput from "../components/AddApp/ImageInput/ImageInput"
import { EditDevSchema } from "../components/AddApp/formSchema"

const initial = {
  name: "None",
  bio: "Bio",
  image: "",
  github: "Github",
  twitter: "Twitter",
  linkedin: "LinkedIn",
}

const EditDev = () => {
  const imageRef = useRef(null)
  return (
    <div>
      <Formik
        initialValues={initial}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
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
                <NameInput
                  error={errors.name}
                  touched={touched.name}
                ></NameInput>
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
    </div>
  )
}

export default EditDev

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
