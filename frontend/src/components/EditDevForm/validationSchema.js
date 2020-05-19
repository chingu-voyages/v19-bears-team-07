import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  name: Yup.string(),
  bio: Yup.string(),
  github: Yup.string(),
  twitter: Yup.string(),
  linkedin: Yup.string(),
})

export default validationSchema
