// use `import * as forBackend from "./convertForBackend"

export const convertUser = async ({
  name,
  image,
  bio,
  twitter,
  github,
  linkedin,
}) => {
  let convertedImage
  try {
    convertedImage = await convertImage(image)
  } catch (e) {
    console.log(e)
  }

  return {
    name,
    dev_bio: bio,
    dev_twitter: twitter,
    dev_github: github,
    dev_linkedin: linkedin,
  }
}

export const convertApp = async ({
  name,
  image,
  description,
  appUrl,
  github,
  userId,
}) => {
  let convertedImage
  try {
    convertedImage = await convertImage(image)
  } catch (e) {
    console.log(e)
  }
  return {
    name,
    img: convertedImage ? convertedImage : undefined,
    description,
    app_url: appUrl,
    github_url: github,
    user_id: userId,
  }
}

const convertImage = async image => {
  let convertedImage
  try {
    convertedImage = await new Promise(resolve => {
      try {
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

        reader.readAsDataURL(image)
      } catch (e) {
        resolve(null)
      }
    })
  } catch (e) {
    console.log(e)
  }
  return convertedImage
}
