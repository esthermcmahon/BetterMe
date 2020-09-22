import React, { useContext, useEffect, useState } from "react"
import { NoteContext } from "./NoteProvider"
import { HabitContext } from "../habits/HabitProvider"


export const NoteModal = (props) => {
    const { notes, getNotes, addNote, editNote } = useContext(NoteContext)
    const { habits, getHabits } = useContext(HabitContext)


    //component state
    const [note, setNote] = useState({})
    const [habit, setHabit] = useState({ name: "" })

    const editMode = props.match.params.hasOwnProperty("noteId")

    const habitId = parseInt(props.match.params.habitId)
   

    const handleControlledInputChange = (event) => {
        const newNote = Object.assign({}, note)
        newNote[event.target.name] = event.target.value
        setNote(newNote)
    }

    const getNoteInEditMode = () => {
        if (editMode) {
            const noteId = parseInt(props.match.params.noteId)
            const selectedNote = notes.find(note => note.id === noteId) || {}       
            setNote(selectedNote)
            const habit = habits.find(habit => habit.id === selectedNote.habitId)
            setHabit(habit)
        
        }
    }

    useEffect(() => {
        getHabits()
        getNotes()
    }, [])

    useEffect(() => {
        getNoteInEditMode()
    }, [notes])

    useEffect(() => {
        const relatedHabit = habits.find(habit => habit.id === habitId) || {}
        setHabit(relatedHabit)
    }, [habits])


    const createNewNote = () => {

        if (editMode) {
            const habitId = note.habitId
          
            editNote({
                id: note.id,
                habitId: habitId,
                userId: parseInt(localStorage.getItem("BetterMe__user")),
                date: note.date,
                notes: note.notes

            })
            .then(() => props.history.push(`/habits/${habitId}`))
        } else {

        
        addNote({
            habitId: habitId,
            userId: parseInt(localStorage.getItem("BetterMe__user")),
            date: note.date,
            notes: note.notes

        })
            .then(() => props.history.push(`/habits/${habitId}`))
    }

}



    return (
        <form className="NoteForm">
            {/* <h2 className="NoteForm__title">{habit.name}</h2> */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="notes">Note: </label>
                    <input type="text" name="notes" id="notes" required autoFocus className="form-control" placeholder="Notes" defaultValue={note.notes} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Today's Date: </label>
                    <input type="date" name="date" id="date" required autoFocus className="form-control" defaultValue={note.date} onChange={handleControlledInputChange} />
                </div>
            </fieldset>


            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    createNewNote()
                    
                }}
                className="btn btn-primary">
                Save Note
            </button>
        </form>
    )
}