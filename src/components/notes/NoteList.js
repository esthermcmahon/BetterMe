import React, { useContext, useEffect, useState } from "react"
import { NoteContext } from "./NoteProvider"
import { Note } from "./Note"
import { HabitContext } from "../habits/HabitProvider"



export const NoteList = (props) => {

    const habitId = parseInt(props.match.params.habitId)

    const { habits, getHabits } = useContext(HabitContext)
    const { notes, getNotes } = useContext(NoteContext)
   
    const [ relatedNotes, setRelatedNotes ] = useState([])
    const [habit, setHabit] = useState({})
   
  
    
    useEffect(() => {
        getNotes()
        getHabits()
    }, [])


    useEffect(() => {
        const matchingNotesArray = notes.filter(note => note.habitId === habitId) || []
        setRelatedNotes(matchingNotesArray)
    }, [notes])
    

    useEffect(() => {
       
        const matchingHabit = habits.find(habit => habit.id === habitId) || {} //returns habit
        setHabit(matchingHabit)
       
        }, [habits])

    return (
        <div className="notes">
            <h3>Notes</h3>
            {
                relatedNotes.map(note => {
                
                    return <Note key={habit.id} habit={habit} note={note} {...props} /> 
                })

            }
        </div>
    )
}