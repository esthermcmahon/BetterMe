import React, { useState } from "react"

export const HabitRepContext = React.createContext()

export const HabitRepProvider = (props) => {
    const [habitReps, setHabitReps] = useState([])

    const getHabitReps = () => {
        return fetch("http://localhost:8088/habitReps")
            .then(res => res.json())
            .then(setHabitReps)
    }

    const addHabitRep = habitRep => {
        return fetch("http://localhost:8088/habitReps", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(habitRep)
        })
            .then(getHabitReps)
    }

    const getHabitRepById = (id) => {
        return fetch(`http://localhost:8088/habitReps/${id}?_expand=habit`)
            .then(res => res.json())
    }

    const deleteHabitRep = (habitRepId) => {
        return fetch(`http://localhost:8088/habitsReps/${habitRepId}`, {
            method: "DELETE"
        })
        .then(getHabitReps)
    }


    

    return (
        <HabitRepContext.Provider value={{
            habitReps, addHabitRep, getHabitReps, getHabitRepById, deleteHabitRep
        }}>
            {props.children}
        </HabitRepContext.Provider>
    )


}