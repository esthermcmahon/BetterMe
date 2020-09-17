import React, { useContext, useEffect, useState } from "react"
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
                habits.map(habit => {
                
                    return habit.archive === false ? <Habit key={habit.id} habit={habit} {...props} /> : ""
                })

            }
        </div>
    )
}

