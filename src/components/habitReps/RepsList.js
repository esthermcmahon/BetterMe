import React, { useContext, useEffect, useState } from "react"
import { HabitRepContext } from "./HabitRepProvider"
import { HabitContext } from "../habits/HabitProvider"
import "./RepsList.css"


export const RepsList = (props) => {

    const habitId = parseInt(props.match.params.habitId)

    const { habits, getHabits } = useContext(HabitContext)
    const { habitReps, getHabitReps } = useContext(HabitRepContext)

    const [relatedHabitReps, setRelatedHabitReps] = useState([])
    const [habit, setHabit] = useState({})



    useEffect(() => {
        getHabitReps()
        getHabits()
    }, [])


    useEffect(() => {
        const matchingHabitReps = habitReps.filter(hr => hr.habitId === habitId) || []
        setRelatedHabitReps(matchingHabitReps)
    }, [habitReps])


    useEffect(() => {

        const matchingHabit = habits.find(habit => habit.id === habitId) || {} //returns habit
        setHabit(matchingHabit)

    }, [habits])

    return (
        <>
            <div className="habitRepsList">
                <h3>Completed Reps</h3>
                {
                    relatedHabitReps.map(habitRep => {

                        return <>
                            <p>{new Date(habitRep.dateTimeDone).toLocaleDateString('en-US')}</p>
                            </>
                        
                    })

                }
            </div>
        </>
    )
}

// deleteHabitRep
// <button onClick={() => deleteHabitRep(habitRep.id)}>x</button>
// key={habit.id} habit={habit} note={note} {...props}