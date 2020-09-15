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

    

    return (
        <HabitRepContext.Provider value={{
            habitReps, addHabitRep
        }}>
            {props.children}
        </HabitRepContext.Provider>
    )


}