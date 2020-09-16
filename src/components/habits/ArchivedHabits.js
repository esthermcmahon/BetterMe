import React, { useContext, useEffect, useState } from "react"
import { HabitContext } from "./HabitProvider"



export const ArchivedHabits = (props) => {
    const { habits, getHabits } = useContext(HabitContext)

    const [habit, setHabit] = useState({ name: "" })

    const isArchived = habit.archive === true

    useEffect(() => {
        getHabits()
    }, [])


    return (
        <>

            <section className="archivedHabits">
                <h3>Saved For Later</h3>
                {isArchived ?
                    <div>{habit.name}</div> : ""}
            </section>
        </>
    )
}