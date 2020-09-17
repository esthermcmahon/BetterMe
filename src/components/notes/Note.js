import React, { useContext, useEffect } from "react"
import { NoteContext } from "./NoteProvider"



export const Note = (props) => {
    const { deleteNote } = useContext(NoteContext)

    return (
        <section className="note">
            <div>Note: {props.note.notes} </div>
            <div>Date: { new Date(props.note.date).toLocaleDateString('en-US')}</div>
            <button onClick={() => {
                deleteNote(props.note.id)
            }}>Delete</button>
            <button onClick={() => {
                props.history.push(`/notes/${props.note.id}/edit`)
            }}>Edit</button>


        </section>

    )

}
