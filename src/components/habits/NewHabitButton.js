import React from "react"




export const CreateNewHabitButton = (props) => {
    return (
        <button className="nav newHabit" onClick={() => props.history.push("/habits/create")}>
            Create New Habit
        </button>
    )
}

