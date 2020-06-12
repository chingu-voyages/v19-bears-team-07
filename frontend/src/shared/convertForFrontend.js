import * as v from "voca"

export const convertApp = ({
  name,
  description,
  img,
  app_url,
  github_url,
  is_favorite,
  id,
  user_id,
  ratings,
  score,
}) => ({
  id,
  name,
  description,
  ratings,
  image: img,
  appUrl: app_url,
  githubUrl: github_url,
  userId: user_id,
  rating: score,
  isFavorite: is_favorite,

  url: `/apps/${id}`,
  manageUrl: `/manage-apps/${id}/edit`,
  imageUrl: img
    ? ""
    : "http://brandthunder.com/wp/wp-content/uploads/2012/07/Facebook-skins-post.png",
})

const defaultAvatar =
  "http://www.kirkleescollege.ac.uk/wp-content/uploads/2015/09/default-avatar.png"

export const convertUser = userData => {
  const {
    name,
    img,
    is_dev,
    dev_bio,
    dev_twitter,
    dev_github,
    dev_linkedin,
    dev_portfolio,
    id,
  } = userData

  return {
    name: name ? name : "",
    image: img ? img : defaultAvatar,
    dev: is_dev ? is_dev : "",
    bio: dev_bio ? dev_bio : "",
    twitter: dev_twitter ? dev_twitter : "",
    github: dev_github ? dev_github : "",
    linkedin: dev_linkedin ? dev_linkedin : "",
    website: dev_portfolio ? dev_portfolio : "",
    url: `portfolios/${id}`,
  }
}

export const convertComment = commentData => {
  const {
    id,
    title,
    description,
    created_at,
    updated_at,
    app_id,
    user_id,
    img,
    username,
  } = commentData

  return {
    id,
    username,
    text: description,
    timestamp: new Date(created_at),
    avatar: img,
    user_id: user_id,
  }
}

export const convertSearch = searchData => {
  const { apps, stats, data } = searchData

  const mapped = {
    // This is each property of the dev info
    dev: {
      image: data.img ? data.img : defaultAvatar,
      bio: {
        text: data.dev_bio,
        substrings: findMatches(stats.matches, "dev_bio", data.dev_bio),
      },
      name: {
        text: data.name,
        substrings: findMatches(stats.matches, "name", data.name),
      },
      url: `portfolios/${data.id}`,
    },
    apps: apps.map(convertAppForSearch),
    score: stats.score,
  }

  return mapped

  // This function looks through a `matches` object
  // and picks out the matches for a field. Then it uses the matches to create a list of whether or not a part of the text
  // is a match or not
  // TODO : Get rid of this step by doing it on the backend. This is confusing for people
  function findMatches(matches, field, text) {
    const foundMatches = []
    Object.values(matches).forEach(matchSet => {
      Object.keys(matchSet).forEach(key => {
        if (key === field) {
          foundMatches.push(matchSet[key])
        }
      })
    })
    return toSubstrings(foundMatches, text)
  }

  // This function takes an array of found matches, and maps them over the entire text
  function toSubstrings(foundMatches, originalText) {
    const text = originalText.replace(/\s+/, "\u00A0")
    const sortedMatches = foundMatches.sort((a, b) => a.begin - b.begin)
    const substrings = []
    let start = 0
    let currentMatchIndex = 0
    while (start < text.length && currentMatchIndex < sortedMatches.length) {
      const currentMatch = sortedMatches[currentMatchIndex]
      if (start < currentMatch.begin) {
        substrings.push({
          text: v.substring(text, start, currentMatch.begin),
          isMatch: false,
        })

        start = currentMatch.begin
      } else {
        substrings.push({
          text: v.substring(text, currentMatch.begin, currentMatch.end),
          isMatch: true,
        })
        start = currentMatch.end
        currentMatchIndex += 1
      }
    }

    if (start < text.length) {
      substrings.push({
        text: v.substring(text, start, text.length),
        isMatch: false,
      })
    }

    return substrings
  }

  function convertAppForSearch({ data, stats, rating }) {
    return {
      name: {
        text: data.name,
        substrings: findMatches(stats.matches, "name", data.name),
      },
      description: {
        text: data.description,
        substrings: findMatches(stats.matches, "description", data.description),
      },
      image: data.img ? data.img : "WHAT",
      rating: rating,
      url: `apps/${data.id}`,
      score: stats.score,
    }
  }
}

export const convertRating = ratingData => {
  const { score } = ratingData
  return {
    score: score ? score : 0,
  }
}
