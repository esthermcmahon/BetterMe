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
        return fetch(`http://localhost:8088/habits/${id}?_expand=color`)
            .then(res => res.json())
    }

    const editHabit = habit => {
        return fetch(`http://localhost:8088/habits/${habit.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(habit)
        })
            .then(getHabits)
    }

    const archiveHabit = (habitId) => {
        const archivedHabit = {
            archive: true
        }
        return fetch(`http://localhost:8088/habits/${habitId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
    
            },
            body: JSON.stringify(archivedHabit)
        })
            .then(getHabits)     
    }

    const restoreHabit = (habitId) => {
        const restoredHabit = {
            archive: false
        }
        return fetch(`http://localhost:8088/habits/${habitId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
    
            },
            body: JSON.stringify(restoredHabit)
        })
            .then(getHabits)     
    }


    return (
        <HabitContext.Provider value={{
            habits, addHabit, getHabits, getHabitById, deleteHabit, editHabit, archiveHabit, restoreHabit
        }}>
            {props.children}
        </HabitContext.Provider>
    )


}