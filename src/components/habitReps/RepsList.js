import React, { useContext, useEffect, useState } from "react"
import { HabitRepContext } from "./HabitRepProvider"
import { HabitContext } from "../habits/HabitProvider"



export const RepsList = (props) => {

    const habitId = parseInt(props.match.params.habitId)

    const { habits, getHabits } = useContext(HabitContext)
    const { habitReps, getHabitReps } = useContext(HabitRepContext)

    const [relatedHabitReps, setRelatedHabitReps] = useState([])
    const [habit, setHabit] = useState({})

    const [ currentRepsLength, setCurrentRepsLength ] = useState()
    const [ goal, setGoal] = useState()

    const noGoal = habit.goal === 0
    

    useEffect(() => {
        getHabitReps()
        getHabits()
    }, [])


    useEffect(() => {
        const matchingHabitReps = habitReps.filter(hr => hr.habitId === habitId) || []
        setRelatedHabitReps(matchingHabitReps)
        const numberOfReps = matchingHabitReps.length
        setCurrentRepsLength(numberOfReps)
    }, [habitReps, currentRepsLength])


    useEffect(() => {

        const matchingHabit = habits.find(habit => habit.id === habitId) || {} //returns habit
        setHabit(matchingHabit)
        const goalOfReps = matchingHabit.goal
        setGoal(parseInt(goalOfReps))

    }, [habits, goal])

    return (
        <>
            <div className="habitRepsList">
                <h3>Completed Reps</h3>
                <>
                {noGoal ? "" : `${currentRepsLength} / ${goal}`}
                </>
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

