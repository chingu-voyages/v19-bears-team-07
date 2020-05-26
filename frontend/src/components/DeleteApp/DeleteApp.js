import React, { useState } from "react"

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

const DeleteApp = ({ name, appId }) => {
  const [inputText, setInputText] = React.useState("")
  const [isAreYouSureModal, setAreYouSureModal] = useState(false)
  const [isSuccessModal, setSuccessModal] = useState(false)
  const toggleAreYouSureModal = () =>
    setAreYouSureModal(isAreYouSureModal => !isAreYouSureModal)

  const deleteApp = async () => {
    await doDeleteApp(appId)
    setSuccessModal(true)
    setTimeout(() => {
      setSuccessModal(false)
      navigate("manage-apps")
    }, 1000)
  }

  return (
    <React.Fragment>
      <Button
        color={"danger"}
        onClick={() => {
          setInputText("")
          toggleAreYouSureModal()
        }}
      >
        Delete
      </Button>
      <Modal isOpen={isAreYouSureModal} toggle={toggleAreYouSureModal}>
        <ModalHeader toggle={toggleAreYouSureModal}>Are you sure?</ModalHeader>
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
              toggleAreYouSureModal()
            }}
          >
            Confirm
          </Button>
          <Button color={"secondary"} onClick={toggleAreYouSureModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={isSuccessModal} centered={true}>
        <ModalBody style={{ fontSize: "3em", textAlign: "center" }}>
          Deleted successfully
        </ModalBody>
      </Modal>
    </React.Fragment>
  )
}

export default DeleteApp
