const fetchJsonAndParse = async request => {
  const response = await fetch(request)
  const parsedResponse = await response.json()
  return parsedResponse
}

export default fetchJsonAndParse
