import React, { useRef } from "react"
import { Formik, Form } from "formik"
import { FormGroup, Col, Container, Button, Modal, ModalBody } from "reactstrap"

import formInitialValues from "./formInitialValues"
import formSchema from "./formSchema"

import NameInput from "./NameInput/NameInput"
import ImageInput from "./ImageInput/ImageInput"
import TagsInput from "./TagsInput/TagsInput"
import DescriptionInput from "./DescriptionInput/DescriptionInput"
import AppUrlInput from "./AppUrlInput/AppUrlInput"
import Github from "./GithubInput/GithubInput"

const AddApp = props => {
  const imageRef = useRef(null)
  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={formSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        console.log(imageRef)
        try {
          console.log(values)
        } catch (e) {
          console.log(e)
        }
        resetForm(formInitialValues)
        imageRef.current.value = ""
        setSubmitting(false)
      }}
    >
      {({ errors, touched, isSubmitting, setFieldValue }) => (
        <Form>
          <FormGroup>
            <Container>
              <input type="hidden" value="for disrupting autocomplete" />
              <Modal isOpen={props.successModal} centered={true}>
                <ModalBody style={{ fontSize: "3em", textAlign: "center" }}>
                  Ok!
                </ModalBody>
              </Modal>
              <br />
              <NameInput error={errors.name} touched={touched.name} />
              <br />
              <ImageInput
                ref={imageRef}
                setFieldValue={setFieldValue}
                errors={errors.picture}
                touched={touched.picture}
              />
              <br />
              <TagsInput error={errors.tags} touched={touched.tags} />
              <br />
              <DescriptionInput error={errors.desc} touched={touched.desc} />
              <br />
              <AppUrlInput error={errors.appUrl} touched={touched.appUrl} />
              <br />
              <Github error={errors.github} touched={touched.github} />
              <br />
              <Col>
                <Button type="submit" color="primary" disabled={isSubmitting}>
                  Submit
                </Button>
              </Col>
            </Container>
          </FormGroup>
        </Form>
      )}
    </Formik>
  )
}
export default AddApp
