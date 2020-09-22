import React, { useContext, useState } from "react"
import { NoteContext } from "./NoteProvider"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
// import { NoteModal } from "./NoteModal"
// import { Modal } from "reactstrap"
// import CancelPresentationIcon from "@material-ui/icons/CancelPresentation"



export const Note = (props) => {
    const { deleteNote } = useContext(NoteContext)

    // const [noteModal, setNoteModal] = useState(false);

    // const noteToggle = () => setNoteModal(!noteModal);

    return (
        <section className="note">
            <div>Note: {props.note.notes}</div>
            <div>Date: {new Date(props.note.date).toLocaleDateString('en-US')}</div>
            <button onClick={() => {
                deleteNote(props.note.id)
            }} title="Delete"><DeleteIcon className="materialUIButton" /></button>
            <button onClick={() => { 
                props.history.push(`/notes/${props.note.id}/edit`)

            }} title="Edit" ><EditIcon className="materialUIButton" />
              

            </button>


        </section >

    )

}
{/* <button onClick={() => {
    props.history.push(`/habits/${habit.id}/notes/create`)
}} title="Add a Note" onClick={noteToggle}><NoteAddIcon className="materialUIButton" />
<Modal isOpen={noteModal} className="modal">
        <NoteModal {...props} />
        <button className="close-button" onClick={noteToggle} title="close"><CancelPresentationIcon className="materialUIButton"/></button>
    </Modal>
</button> */}

// import Modal, useState, cancelpresentationicon, and notetoggle

// onClick={noteToggle}
// <Modal isOpen={noteModal} className="modal">
// <NoteModal {...props} />
// <button className="close-button" onClick={noteToggle} title="close"><CancelPresentationIcon className="materialUIButton" /></button>
// </Modal>