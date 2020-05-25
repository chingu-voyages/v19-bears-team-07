const separateTags = tags => {
  return trimCommas(tags).split(" ")
}

const trimCommas = str => str.replace(/,/g, "")

export default separateTags
