import React, {useState, useContext, useEffect} from "react"
import { Link } from "react-router-dom"
import { HabitContext } from "./HabitProvider"
import { ColorContext } from "../colors/ColorProvider"

export const Habit = (props) => {
    const { getHabits, habits } = useContext(HabitContext)
    const { colors, getColors } = useContext(ColorContext)

    const [habit, setHabit] = useState({})
    const [color, setColor] = useState({})


    useEffect(() => {
        getHabits()
        getColors()
    }, [])

    useEffect(() => {
        const habit = habits.find(habit => habit.id === props.match.params.habitId) || {}
        setHabit(habit)
    }, [habits])

    useEffect(() => {
        const color = colors.find(color => color.id === habit.colorId) || {}
        setColor(color)
    }, [colors])

    return (
    <section className="habitCard">
        <h3 className="habitName"><Link to={`/habits/${habit.id}`}>
                { habit.name }
            </Link></h3>
        <div className="habitColor">Color: {color.color}</div>
    </section>
    )
}