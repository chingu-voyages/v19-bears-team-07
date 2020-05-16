import React, { useRef } from "react"
import { Formik, Form } from "formik"
import { FormGroup, Container, Button } from "reactstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import BasicInput from "./AddApp/BasicInput/BasicInput"
import ImageInput from "./AddApp/ImageInput/ImageInput"
import { EditDevSchema } from "./AddApp/formSchema"
import { updateProfileRequest } from "../shared/fetch"

export const EditDevForm = ({ initialValues, userId, onSubmit }) => {
  const imageRef = useRef(null)
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          await updateProfileRequest(await mapFromUser(values), userId)
        } catch (e) {
          console.log(e)
        }
        imageRef.current.value = ""
        setSubmitting(false)
        onSubmit()
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

const NameInput = props => (
  <BasicInput componentName="name" label="name" type="text" {...props} />
)

const BioInput = props => (
  <BasicInput componentName="bio" label="bio" type="textarea" {...props} />
)

// Note that `componentName` is the name of the field in the object the form submits...
// It isn't safe to leave it as the label, since the label may change in the future.
const UrlInput = props => {
  const { label, ...rest } = props
  return (
    <BasicInput componentName={label} label={label} type="text" {...rest} />
  )
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
