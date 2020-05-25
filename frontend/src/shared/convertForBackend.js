// use `import * as forBackend from "./convertForBackend"

export const convertUser = async ({
  name,
  image,
  bio,
  twitter,
  github,
  linkedin,
}) => {
  const convertedImage = await new Promise(resolve => {
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
      reader.readAsDataURL(image)
    } catch (e) {
      resolve(null)
    }
  })

  return {
    name,
    // image,
    dev_bio: bio,
    dev_twitter: twitter,
    dev_github: github,
    dev_linkedin: linkedin,
  }
}
