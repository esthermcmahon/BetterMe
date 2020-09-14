import React, { useContext, useEffect, useState } from "react"
import { HabitContext } from "./HabitProvider"


export const HabitDetails = (props) => {
    const { deleteHabit, getHabitById } = useContext(HabitContext)

    const [habit, setHabit] = useState({color:{}})

    useEffect(() => {
        const habitId = parseInt(props.match.params.habitId)
        getHabitById(habitId)
            .then(setHabit)
    }, [])

    return (
        <section className="habit">
            <h3 className="habitName">{habit.name}</h3>
            <div className="habitDate">Start Date: {habit.startDate}</div>
            <div className="habitFrequency">Frequency goal: {habit.frequency}</div>
            <div className="habitDetails">Details: {habit.details}</div>
            <div className="habitColor">Color: {habit.color.color} </div>

            <button onClick={() => deleteHabit(habit.id).then(() => props.history.push("/main"))} >Delete</button>

            <button onClick={() => {
                props.history.push(`/habits/edit/${habit.id}`)
            }}>Edit</button>
        </section>
    )
}