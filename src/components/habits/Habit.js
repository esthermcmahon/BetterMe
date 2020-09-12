import React from "react"

export const Habit = ({ habit }) => (
    <section className="habitCard">
        <h3 className="habitName">{habit.name}</h3>
    </section>
)