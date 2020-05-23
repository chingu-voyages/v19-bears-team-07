import React from "react"

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  ModalFooter,
} from "reactstrap"
import { navigate } from "gatsby"

import doDeleteApp from "../../shared/fetchActions/deleteMyApp"
import "./DeleteApp.css"

const DeleteApp = ({ name, appId }) => {
  const [inputText, setInputText] = React.useState("")
  const [modal, setModal] = React.useState(false)
  const toggleModal = () => setModal(modal => !modal)

  const deleteApp = async () => {
    await doDeleteApp(appId)
    navigate("manage-apps")
  }

  return (
    <React.Fragment>
      <Button
        color={"danger"}
        onClick={() => {
          setInputText("")
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
            value={inputText}
            onChange={event => setInputText(event.target.value)}
          ></Input>
        </ModalBody>
        <ModalFooter>
          <Button
            color={"danger"}
            disabled={inputText !== name}
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
