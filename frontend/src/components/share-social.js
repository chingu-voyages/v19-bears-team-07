import React from "react"
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"
import { useLocation } from "@reach/router"

// Share icons will share the current page unless the props override it.
// TODO: To expand what these social icons do, use the docs at https://github.com/nygardk/react-share
export const ShareSocial = ({ shareUrl }) => {
  const location = useLocation()
  const href = shareUrl ? shareUrl : location.href

  return (
    <div className={"ShareSocial-Container"}>
      <FacebookShareButton url={href}>
        <FacebookIcon round></FacebookIcon>
      </FacebookShareButton>
      <LinkedinShareButton url={href}>
        <LinkedinIcon round></LinkedinIcon>
      </LinkedinShareButton>
      <TwitterShareButton url={href}>
        <TwitterIcon round></TwitterIcon>
      </TwitterShareButton>
    </div>
  )
}

export default ShareSocial
