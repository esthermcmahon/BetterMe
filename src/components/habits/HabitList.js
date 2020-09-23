import React, { useContext, useEffect, useState } from "react"
import { HabitContext } from "./HabitProvider"
import { Habit } from "./Habit"


export const HabitList = (props) => {
    const { habits, getHabits } = useContext(HabitContext)

    useEffect(() => {
        getHabits()
    }, [])

    const filteredHabits = habits.filter(habit => habit.userId === parseInt(localStorage.getItem("BetterMe__user"))) || {}


    return (
        <section>
            <h3>Habits</h3>
            <div className="habits">

                {
                    filteredHabits.map(habit => {

                        return habit.archive === false ? <Habit key={habit.id} habit={habit} {...props} /> : ""
                    })

                }
            </div>
        </section>
    )
}

