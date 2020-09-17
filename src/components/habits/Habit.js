import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { HabitContext } from "./HabitProvider"
import { HabitRepContext } from "../habitReps/HabitRepProvider"


export const Habit = (props) => {
    const { getHabitById, archiveHabit } = useContext(HabitContext)
    const { addHabitRep } = useContext(HabitRepContext)

    const [habit, setHabit] = useState({ color: {} })


    useEffect(() => {
        const habitId = parseInt(props.habit.id)
        getHabitById(habitId)
            .then(setHabit)
    }, [])



    return (
        <section className="habitCard">
            <h3 className="habitName"><Link to={`/habits/${habit.id}`}>
                {habit.name}
            </Link></h3>
            <div className="habitColor">Color: {habit.color.color}</div>
            <button onClick={() => {
                addHabitRep({
                    habitId: habit.id,
                    dateTimeDone: Date.now()
                })
                    .then(() => props.history.push("/main"))
            }}>Done!</button>
            <button onClick={() => {
                props.history.push(`/habits/${habit.id}/addHabitReps`)
            }}>Add Previous Reps</button>
            <button onClick={() => archiveHabit(habit.id).then(() => props.history.push("/habits/archivedHabits"))} >Save for later</button>
        </section>
    )
}