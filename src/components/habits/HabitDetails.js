import React, { useContext, useEffect, useState } from "react"
import { HabitContext } from "./HabitProvider"
import { HabitRepContext } from "../habitReps/HabitRepProvider"
import "./Habit.css"
import "./HabitDetails.css"
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import AddBoxIcon from "@material-ui/icons/AddBox"
import NoteAddIcon from "@material-ui/icons/NoteAdd"
import DoneIcon from "@material-ui/icons/Done"
import ArchiveIcon from "@material-ui/icons/Archive"



export const HabitDetails = (props) => {
    const { deleteHabit, getHabitById, archiveHabit } = useContext(HabitContext)
    const { addHabitRep } = useContext(HabitRepContext)

    const [habit, setHabit] = useState({ color: {} })


    useEffect(() => {
        const habitId = parseInt(props.match.params.habitId)
        getHabitById(habitId)
            .then(setHabit)
    }, [])

    const [showDialog, setShowDialog] = React.useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);

    return (
        <section className="habitDetails" id={habit.color.color}>
            <h3 className="habitName">{habit.name}</h3>
            <div className="habitDate">Start Date: {new Date(habit.startDate).toLocaleDateString('en-US')}</div>
            <div className="habitFrequency">Frequency goal: {habit.frequency}</div>
            <div className="habitDetails">Details: {habit.details}</div>

            <button className="habitDetailsButton" onClick={() => {
                addHabitRep({
                    habitId: habit.id,
                    dateTimeDone: Date.now()
                })
                    .then(() => props.history.push("/main"))
            }}><DoneIcon /></button>
            <button onClick={() => {
                props.history.push(`/habits/${habit.id}/addHabitReps`)
            }} title="Add Previous Reps"><AddBoxIcon /></button>

            <button onClick={() => deleteHabit(habit.id).then(() => props.history.push("/main"))}><DeleteIcon /></button>
            <button onClick={() => archiveHabit(habit.id).then(() => props.history.push("/habits/archivedHabits"))} title="Save For Later"><ArchiveIcon /></button>
            <button onClick={() => {
                props.history.push(`/habits/edit/${habit.id}`)
            }}><EditIcon /></button>
            <button onClick={() => {
                props.history.push(`/habits/${habit.id}/notes/create`)
            }} title="Add a Note"><NoteAddIcon /></button>
        </section>
    )
}