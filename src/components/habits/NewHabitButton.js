import React from "react"


export const CreateNewHabitButton = (props) => {
    return (
        <button onClick={() => props.history.push("/habits/create")}>
            Create New Habit
        </button>
    )
}

