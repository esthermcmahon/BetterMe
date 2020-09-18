import React from "react"


export const SavedHabits = (props) => {
    return (
        <button onClick={() => props.history.push("/habits/archivedHabits")}>
            See Saved Habits
        </button>
    )
}