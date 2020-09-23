// import React, { useContext, useEffect, useState } from "react"
// import { NoteContext } from "./NoteProvider"
// import { HabitContext } from "../habits/HabitProvider"


// export const NoteModal = (props) => {
//     const { notes, getNotes, addNote, editNote } = useContext(NoteContext)
//     const { habits, getHabits } = useContext(HabitContext)


//     //component state
//     const [note, setNote] = useState({})
//     const [habit, setHabit] = useState({ name: "" })

//     // const editMode = props.match.params.hasOwnProperty("noteId")

//     // const habitId = parseInt(props.match.habitId)
   

//     // const handleControlledInputChange = (event) => {
//     //     const newNote = Object.assign({}, note)
//     //     newNote[event.target.name] = event.target.value
//     //     setNote(newNote)
//     // }

//     const getNoteInEditMode = () => {
//             const noteId = parseInt(props.noteId)
//             const selectedNote = notes.find(note => note.id === noteId) || {}       
//             setNote(selectedNote)
//             const habit = habits.find(habit => habit.id === selectedNote.habitId) || {}
//             setHabit(habit)
        
//         }
//     }

//     useEffect(() => {
//         getHabits()
//         getNotes()
//     }, [])

//     useEffect(() => {
//         getNoteInEditMode()
//     }, [notes])

//     useEffect(() => {
//         const relatedHabit = habits.find(habit => habit.id === habitId) || {}
//         setHabit(relatedHabit)
//     }, [habits])


//     const createNewNote = () => {
          
//             editNote({
//                 id: note.id,
//                 habitId: habit.id,
//                 userId: parseInt(localStorage.getItem("BetterMe__user")),
//                 date: note.date,
//                 notes: note.notes

//             })
//             .then(() => props.history.push(`/habits/${habitId}`))






//     return (
//         <form className="NoteForm">
//             {/* <h2 className="NoteForm__title">{habit.name}</h2> */}
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="notes">Note: </label>
//                     <input type="text" name="notes" id="notes" required autoFocus className="form-control" placeholder="Notes" defaultValue={note.notes}  />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="date">Today's Date: </label>
//                     <input type="date" name="date" id="date" required autoFocus className="form-control" defaultValue={note.date}  />
//                 </div>
//             </fieldset>


//             <button type="submit"
//                 onClick={evt => {
//                     evt.preventDefault() // Prevent browser from submitting the form
//                     createNewNote()
                    
//                 }}
//                 className="btn btn-primary">
//                 Save Note
//             </button>
//         </form>
//     )
// }