import React, {useState, useContext, useEffect} from "react"
import { Link } from "react-router-dom"
import { HabitContext } from "./HabitProvider"


export const Habit = (props) => {
    const { getHabitById } = useContext(HabitContext)

    const [habit, setHabit] = useState({color:{}})


    // useEffect(() => {
    //     const habit = getHabitById(parseInt(props.match.params.habitId))      
    //     setHabit(habit)
    //     console.log(habit)
    // }, [])

    useEffect(() => {
        const habitId = parseInt(props.habit.id)
        getHabitById(habitId)
            .then(setHabit)
    }, [])



    return (
    <section className="habitCard">
        <h3 className="habitName"><Link to={`/habits/${habit.id}`}>
                { habit.name }
            </Link></h3>
        <div className="habitColor">Color: {habit.color.color}</div>
    </section>
    )
}