import React from "react"
import { Media, Row } from "reactstrap"
import * as forFrontend from "../../shared/convertForFrontend"
import getSingleUser from "../../shared/fetchActions/getSingleUser"
import "./DeveloperIcons.css"
import { navigate } from "gatsby"

const DeveloperIcons = ({ devIds }) => {
  const [devs, setDevs] = React.useState([])

  React.useEffect(() => {
    ;(async () => {
      const devs = await Promise.all(
        devIds.map(async devId => {
          return forFrontend.convertUser(await getSingleUser(devId))
        })
      )
      setDevs(devs)
    })()
  }, [])

  return (
    <Row>
      {devs.map(dev => {
        return <DeveloperIcon dev={dev}></DeveloperIcon>
      })}
    </Row>
  )
}

export default DeveloperIcons

const DeveloperIcon = ({ dev }) => {
  return (
    <div className={"DeveloperIcon-Thumbnail"}>
      <Media
        object
        data-src={dev.image}
        src={dev.image}
        alt={dev.name}
        height={50}
        width={50}
        className={"DeveloperIcon-Image"}
        onClick={() => {
          navigate(dev.url)
        }}
        title={dev.name}
      ></Media>
    </div>
  )
}
