import * as Yup from "yup"

export const AddAppSchema = Yup.object().shape({
  name: Yup.string(),
  tags: Yup.string(),
  description: Yup.string(),
  appUrl: Yup.string(),
  github: Yup.string(),
})

export const EditDevSchema = Yup.object().shape({
  name: Yup.string(),
  bio: Yup.string(),
  github: Yup.string(),
  twitter: Yup.string(),
  linkedin: Yup.string(),
})
