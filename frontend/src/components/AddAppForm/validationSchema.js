import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  name: Yup.string(),
  tags: Yup.string(),
  description: Yup.string(),
  appUrl: Yup.string(),
  github: Yup.string(),
})

export default validationSchema
