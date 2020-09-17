import React, { useContext, useEffect, useState } from "react"
import { HabitContext } from "./HabitProvider"
import { SingleArchivedHabit } from "./ArchivedHabit"



export const ArchivedHabits = (props) => {
    const { habits, getHabits, restoreHabit } = useContext(HabitContext)


    useEffect(() => {
        getHabits()
    }, [])


    return (
        <>
            <section className="archivedHabits">
                <h3>Saved For Later</h3>

                {
                    habits.map(habit => {
                        return habit.archive === true ? <SingleArchivedHabit key={habit.id} habit={habit} {...props} /> : ""
                        
                    })
                }

            </section>
        </>
    )
}