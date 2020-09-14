import React from "react"
import { Link } from "react-router-dom"

export const Habit = ({ habit }) => (
    <section className="habitCard">
        <h3 className="habitName"><Link to={`/habits/${habit.id}`}>
                { habit.name }
            </Link></h3>
    </section>
)