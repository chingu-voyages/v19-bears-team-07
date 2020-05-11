import React from "react"
import { Formik, Form } from "formik"
import { FormGroup, Col, Button, Modal, ModalBody } from "reactstrap"

import formInitialValues from "./formInitialValues"
import formSchema from "./formSchema"
import getValuesForPost from "./getValuesForPost"
import axiosConfig from "./axiosConfig"

import NameInput from "./NameInput/NameInput"
import TagsInput from "./TagsInput/TagsInput"
import DescInput from "./DescInput/DescInput"
import AppUrlInput from "./AppUrlInput/AppUrlInput"
import Github from "./GithubInput/GithubInput"

const AddApp = props => (
  <Formik
    initialValues={formInitialValues}
    validationSchema={formSchema}
    onSubmit={async (values, { setSubmitting, resetForm }) => {
      const valuesForPost = getValuesForPost(values)
      try {
        console.log(valuesForPost)
        // await popLockersAPI.post("invoice/0", valuesForPost, axiosConfig)
      } catch (e) {
        console.log(e)
      }
      resetForm(formInitialValues)
      setSubmitting(false)
    }}
  >
    {({ values, errors, touched, isSubmitting }) => (
      <Form>
        <FormGroup>
          <Col xs="12" sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
            <input type="hidden" value="for disrupting autocomplete" />
            <Modal isOpen={props.successModal} centered={true}>
              <ModalBody style={{ fontSize: "3em", textAlign: "center" }}>
                Ok!
              </ModalBody>
            </Modal>
            <br />
            <NameInput error={errors.name} touched={touched.name} />
            <br />
            <TagsInput error={errors.tags} touched={touched.tags} />
            <br />
            <DescInput error={errors.desc} touched={touched.desc} />
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
          </Col>
        </FormGroup>
      </Form>
    )}
  </Formik>
)

export default AddApp
