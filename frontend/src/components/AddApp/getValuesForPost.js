const getValuesForPost = values => {
  const { name, tags, desc, appUrl, github } = values
  const valuesForPost = {
    name,
    tags,
    desc,
    appUrl,
    github,
  }
  return valuesForPost
}

export default getValuesForPost
