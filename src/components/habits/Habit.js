import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { HabitContext } from "./HabitProvider"
import { HabitRepContext } from "../habitReps/HabitRepProvider"
import "./Habit.css"
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";


export const Habit = (props) => {
    const { getHabitById, archiveHabit } = useContext(HabitContext)
    const { addHabitRep } = useContext(HabitRepContext)

    const [habit, setHabit] = useState({ color: {} })


    useEffect(() => {
        const habitId = parseInt(props.habit.id)
        getHabitById(habitId)
            .then(setHabit)
    }, [])

    const [showDialog, setShowDialog] = React.useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);



    return (
        <section className="habitCard" id={habit.color.color}>
            <h3 className="habitName" ><div className="habitColor" id={habit.color.color}></div><Link to={`/habits/${habit.id}`}>
                {habit.name}
            </Link></h3>


            <button onClick={() => {
                addHabitRep({
                    habitId: habit.id,
                    dateTimeDone: Date.now()
                })
                    .then(() => props.history.push("/main"))
            }}>+</button>
            <button onClick={open} >... </button>
            <Dialog className="dialog" isOpen={showDialog} onDismiss={close}>
                <button className="close-button" onClick={close}>x</button>
                <button onClick={() => {
                    props.history.push(`/habits/${habit.id}/addHabitReps`)
                }}>Add Previous Reps</button>
                <button onClick={() => archiveHabit(habit.id).then(() => props.history.push("/habits/archivedHabits"))} >Save for later</button>
            </Dialog>

        </section>
    )
}