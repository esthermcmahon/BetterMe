import React, { useState, useContext, useEffect } from "react"
import { HabitContext } from "../habits/HabitProvider"
import { HabitRepContext } from "./HabitRepProvider"
import { SingleHabitProgress } from "./SingleHabitProgress"
import "./HabitProgress.css"

export const HabitProgress = (props) => {
    const { habits, getHabits } = useContext(HabitContext)
    const { habitReps, getHabitReps } = useContext(HabitRepContext)


    const [habit, setHabit] = useState({})
    const [habitRep, setHabitRep] = useState({})

    const [relatedHabit, setRelatedHabit] = useState({})


    useEffect(() => {
        getHabits()

    }, [])


    useEffect(() => {

        const matchingHabit = habits.find(habit => habit.id === habitRep.habitId) || {} //returns habit
        setRelatedHabit(matchingHabit)

    }, [habits])



    const filteredHabits = habits.filter(habit => habit.userId === parseInt(localStorage.getItem("BetterMe__user"))) || {}

    return (
        <div>
            <h3>Habit Progress</h3>
            <section className="habitProgress">

                {
                    filteredHabits.map(habit => {
                        return habit.archive === false ? <SingleHabitProgress key={habit.id} habitId={habit.id} {...props} habit={habit} /> : ""
                    })
                }
            </section>
        </div>
    )
}



