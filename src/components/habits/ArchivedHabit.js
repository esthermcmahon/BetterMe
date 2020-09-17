import React, { useContext } from "react"
import { HabitContext } from "./HabitProvider"



export const SingleArchivedHabit = (props) => {
    const { restoreHabit } = useContext(HabitContext)
    return (
        <section className="singleArchivedHabit">
        <h3>{props.habit.name}</h3>
        <button onClick={() => {
        restoreHabit(props.habit.id).then(() => props.history.push("/main"))
        }}>Add to Dashboard</button> 
        
            
        </section>
        
    )
   
}



