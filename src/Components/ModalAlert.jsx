import React, { useState } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const ModalAlert = (props) => {
    let modalState=props.handles.modalState
    let setModalState= props.handles.setModalState
    let handleOpen = props.handles.handleOpen
    let handleClose = props.handles.handleClose
    let success=props.handles.success
    // console.log(modalState)
  
  return(
  <Modal basic size='small' open={modalState.modalOpen}
  onClose={handleClose}>
    <Header icon={!success?"remove":"checkmark"} content={!success?"WRONG":"CORRECT"} />
    <Modal.Content>
        {!success?<h2 style={{color:"red"}}>CHECK YOUR ANSWER</h2>:<h2 style={{color:"green"}}>GOOD JOB!</h2>}
      
    </Modal.Content>
    <Modal.Actions>
        {!success?
      <Button basic color='red' inverted onClick={handleClose}>
         Try Again
      </Button>:
      <Button color='green' inverted onClick={handleClose}>
        Okay!
      </Button>
        }
    </Modal.Actions>
  </Modal>
  )
}

export default ModalAlert