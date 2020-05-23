import React from "react"

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Input,
  ModalFooter,
} from "reactstrap"

import "./DeleteApp.css"

const DeleteApp = ({ name, deleteApp }) => {
  const [input, setInput] = React.useState("")
  const [modal, setModal] = React.useState(false)
  const toggleModal = () => setModal(modal => !modal)

  return (
    <React.Fragment>
      <Button
        color={"danger"}
        onClick={() => {
          setInput("")
          toggleModal()
        }}
      >
        Delete
      </Button>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Are you sure?</ModalHeader>
        <ModalBody className={"DeleteApp-modalBody"}>
          You can't undo this action. <br /> <br />
          Enter in the name of this app,
          <span style={{ fontWeight: "bold" }}>{` ${name}`}</span>
          , to confirm that you really want this. <br /> <br />
          <Input
            type="text"
            value={input}
            onChange={event => setInput(event.target.value)}
          ></Input>
        </ModalBody>
        <ModalFooter>
          <Button
            color={"danger"}
            disabled={input !== name}
            onClick={() => {
              deleteApp()
              toggleModal()
            }}
          >
            Confirm
          </Button>
          <Button color={"secondary"} onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  )
}

export default DeleteApp
