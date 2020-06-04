import React from "react"
import { Input, Button } from "reactstrap"
import { navigate } from "gatsby"

const Searches = () => {
  const [searchParams, setSearchParams] = React.useState("")

  return (
    <div className={"Search-container"}>
      <form
        onSubmit={event => {
          event.preventDefault()
          const params = searchParams.trim().replace(/\s+/, "+")
          if (params.length > 0) {
            navigate(`search?q=${params}`)
          } else {
            navigate(`search`)
          }
        }}
      >
        <Input
          value={searchParams}
          onChange={event => {
            console.log(event.target.value)
            setSearchParams(event.target.value)
          }}
        ></Input>
        <Input type={"submit"}>Search</Input>
      </form>
    </div>
  )
}

export default Searches
