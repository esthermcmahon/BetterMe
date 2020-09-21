import React, { useContext } from "react"
import { HabitContext } from "./HabitProvider"
import UnarchiveIcon from "@material-ui/icons/Unarchive"



export const SingleArchivedHabit = (props) => {
    const { restoreHabit } = useContext(HabitContext)
    return (
        <section className="singleArchivedHabit">
        <h4>{props.habit.name}</h4>
        <button onClick={() => {
        restoreHabit(props.habit.id).then(() => props.history.push("/main"))
        }} title="Add to Dashboard"><UnarchiveIcon /></button> 
        
            
        </section>
        
    )
   
}



