import React, { useContext, useEffect } from "react"
import { HabitContext } from "./HabitProvider"
import { Habit } from "./Habit"

export const HabitList = (props) => {
    const { habits, getHabits } = useContext(HabitContext)

    useEffect(() => {
        getHabits()
    }, [])

    return (
        <div className="habits">
            {
                habits.map(habit => <Habit key={habit.id} habit={habit} {...props} />)

            }
        </div>
    )
}