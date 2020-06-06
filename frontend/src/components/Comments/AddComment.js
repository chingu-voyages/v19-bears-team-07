import React from "react"
import { Form, Input, FormGroup, Button } from "reactstrap"

import UserContext from "../../shared/UserContext"
import "./AddComment.css"
import createComment from "../../shared/fetchActions/createComment"

const AddComment = ({ appId }) => {
  const { loggedIn, userId } = React.useContext(UserContext)

  const [comment, setComment] = React.useState("")

  if (!loggedIn) {
    return null
  }

  const submit = async event => {
    event.preventDefault()

    return createComment({
      userId,
      comment,
      appId,
    })
  }

  return (
    <div className={"AddComment-container"}>
      <Form>
        <FormGroup>
          <Input
            className={"AddComment-commentInput"}
            type={"textarea"}
            value={comment}
            onChange={event => setComment(event.target.value)}
            rows={5}
          />
        </FormGroup>

        <Button onClick={submit}>Submit</Button>
      </Form>
    </div>
  )
}

export default AddComment
