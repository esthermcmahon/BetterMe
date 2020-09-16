import React, { useContext, useEffect, useState } from "react"
import { HabitRepContext } from "./HabitRepProvider"



export const SingleHabitProgress = ({ habit }) => {

    const { habitReps, getHabitReps } = useContext(HabitRepContext)

    const [filteredHabitReps, setFilteredHabitRep] = useState([])

    useEffect(() => {
        getHabitReps()

    }, [])

    useEffect(() => {    
        const matchingHabitRepsArray = habitReps.filter(hr => hr.habitId === habit.id) || []
        setFilteredHabitRep(matchingHabitRepsArray)

    }, [habitReps])


    return (
        <h3>{habit.name}: {filteredHabitReps.length} </h3>
    )
}



