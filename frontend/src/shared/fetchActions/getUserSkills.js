import fetchJsonAndParse from "./fetchJsonAndParse"
import testSkills from "../../fixtures/testSkills"
import * as Url from "../urls"

const getUserSkills = async userId => {
  try {
    const request = new Request(Url.userSkillsList(userId), {
      method: "GET",
      credentials: "include",
    })

    const skillsData = await fetchJsonAndParse(request)
    return skillsData
  } catch (e) {
    return { skills: testSkills }
  }
}

export default getUserSkills
