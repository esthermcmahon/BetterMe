import React, { useContext, useState } from "react"
import { NoteContext } from "./NoteProvider"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"


export const Note = (props) => {
    const { deleteNote } = useContext(NoteContext)


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
