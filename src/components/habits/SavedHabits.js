import React from "react"



export const SavedHabits = (props) => {
    return (
        < button className= "nav savedHabits" onClick={() => props.history.push("/habits/archivedHabits")}>
            See Saved Habits
        </button>
    )
}