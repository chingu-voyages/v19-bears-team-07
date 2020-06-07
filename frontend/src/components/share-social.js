import React from "react"
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"

// Share icons will share the current page unless the props override it.
// TODO: To expand what these social icons do, use the docs at https://github.com/nygardk/react-share
export const ShareSocial = ({ shareUrl, imageUrl }) => {
  const location = useLocation()
  const href = shareUrl ? shareUrl : location.href

  return (
    <div className={"ShareSocial-Container"}>
      <Helmet>
        <meta property="og:image" content={imageUrl} />
      </Helmet>
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
