import React, { useState } from "react"

export const HabitContext = React.createContext()

export const HabitProvider = (props) => {
    const [habits, setHabits] = useState([])

    const getHabits = () => {
        return fetch("http://localhost:8088/habits")
            .then(res => res.json())
            .then(setHabits)
    }

    const addHabit = habit => {
        return fetch("http://localhost:8088/habits", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(habit)
        })
            .then(getHabits)
    }

    const deleteHabit = (habitId) => {
        return fetch(`http://localhost:8088/habits/${habitId}`, {
            method: "DELETE"
        })
        .then(getHabits)
    }

    const getHabitById = (id) => {
        return fetch(`http://localhost:8088/habits/${id}`)
            .then(res => res.json())
    }

    return (
        <HabitContext.Provider value={{
            habits, addHabit, getHabits, getHabitById, deleteHabit
        }}>
            {props.children}
        </HabitContext.Provider>
    )


}