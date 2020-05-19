import React, { useRef, useState, useContext } from "react"
import { Formik, Form } from "formik"
import { FormGroup, Col, Container, Button, Modal, ModalBody } from "reactstrap"

import UserContext from "../../shared/UserContext"
import * as forBackend from "../../shared/convertForBackend"
import postApp from "../../shared/fetchActions/postApp"
import postTag from "../../shared/fetchActions/postTag"
import NameInput from "../formInputs/NameInput/NameInput"
import ImageInput from "../formInputs/ImageInput/ImageInput"
import TagsInput from "../formInputs/TagsInput/TagsInput"
import DescriptionInput from "../formInputs/DescriptionInput/DescriptionInput"
import AppUrlInput from "../formInputs/AppUrlInput/AppUrlInput"
import Github from "../formInputs/GithubInput/GithubInput"
import formInitialValues from "./formInitialValues"
import validationSchema from "./validationSchema"
import separateTags from "./separateTags"

const AddApp = () => {
  const { userId } = useContext(UserContext)
  const [successModal, setSucessModal] = useState(false)
  const imageRef = useRef(null)
  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          values.userId = parseInt(userId)
          const valuesToPost = await forBackend.convertApp(values)
          const { id: app_id } = await postApp(valuesToPost)
          const tagsForPost = separateTags(values.tags)
          await tagsForPost.forEach(async tag => {
            await postTag({ name: tag, app_id })
          })
          setSucessModal(true)
        } catch (e) {
          console.log(e)
        }
        resetForm(formInitialValues)
        imageRef.current.value = ""
        setSubmitting(false)
        setTimeout(() => {
          setSucessModal(false)
        }, 700)
      }}
    >
      {({ errors, touched, isSubmitting, setFieldValue }) => (
        <Form>
          <FormGroup>
            <Container>
              <input type="hidden" value="for disrupting autocomplete" />
              <Modal isOpen={successModal} centered={true}>
                <ModalBody style={{ fontSize: "3em", textAlign: "center" }}>
                  Submitted
                </ModalBody>
              </Modal>
              <br />
              <NameInput error={errors.name} touched={touched.name} />
              <br />
              <ImageInput
                ref={imageRef}
                setFieldValue={setFieldValue}
                errors={errors.image}
                touched={touched.image}
              />
              <br />
              <TagsInput error={errors.tags} touched={touched.tags} />
              <br />
              <DescriptionInput
                error={errors.description}
                touched={touched.description}
              />
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
