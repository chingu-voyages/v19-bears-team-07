import React from "react"
import { Input, Button } from "reactstrap"
import { navigate } from "gatsby"
import "./Search.css"

const Search = () => {
  const [searchParams, setSearchParams] = React.useState("")

  return (
    <div className={"Search-container"}>
      <form
        className={"Search-form"}
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
            setSearchParams(event.target.value)
          }}
          className={"Search-bar"}
          placeholder={"Search"}
        ></Input>
      </form>
    </div>
  )
}

export default Search
