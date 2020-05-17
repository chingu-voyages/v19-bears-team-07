/**
 * This file exports the functions that map the data retrieved from the backend to the
 * data used in the views.
 */

export const mapApp = ({
  name,
  description,
  img,
  app_url,
  github_url,
  id,
}) => ({
  name,
  description,
  image: img,
  appUrl: app_url,
  githubUrl: github_url,

  url: `/apps/${id}`,
  imageUrl: img
    ? ""
    : "https://brandthunder.com/wp/wp-content/uploads/2012/07/Facebook-skins-post.png",
})

export const mapAppAuth = appData => {
  const mapped = mapApp(appData)
  mapped.manageUrl = `/apps/${appData.id}`
  return mapped
}

export const mapUser = async userData => {
  const {
    name,
    img,
    dev_bio,
    dev_twitter,
    dev_github,
    dev_linkedin,
    id,
  } = userData

  return {
    name: name ? name : "",
    image: img ? img : "",
    bio: dev_bio ? dev_bio : "",
    twitter: dev_twitter ? dev_twitter : "",
    github: dev_github ? dev_github : "",
    linkedin: dev_linkedin ? dev_linkedin : "",
    url: `portfolios/${id}`,
  }
}
