export const convertApp = ({
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

export const convertUser = userData => {
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
