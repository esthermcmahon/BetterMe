import React, { useContext, useEffect, useState } from "react"
import { HabitRepContext } from "./HabitRepProvider"
import { HabitContext } from "../habits/HabitProvider"




export const HabitRepForm = (props) => {
    const { addHabitRep } = useContext(HabitRepContext)
    const { habits, getHabits } = useContext(HabitContext)

    //component state
    const [habitRep, setHabitRep] = useState({})
    const [habit, setHabit] = useState({name:""})

    const habitId = parseInt(props.match.params.habitId)
    

    useEffect(() => {

        getHabits()
            .then(console.log(habits))
       
    }, [])

    useEffect(() => {
        
        const relatedHabit = habits.find(habit => habit.id === habitId) || {}
        
        console.log(relatedHabit)
        setHabit(relatedHabit)
    }, [habits])


    const enterPreviousHabitReps = () => {

            addHabitRep({
                habitId: habit.id,
                dateTimeDone: habitRep.dateTimeDone

            })
                .then(() => props.history.push("/main"))
        }

    

    return (
        <form className="habitRepForm">
            <h2 className="habitRepForm__title">{habit.name}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="dateTimeDone">Date completed: </label>
                    <input type="date" name="dateTimeDone" id="dateTimeDone" required autoFocus className="form-control" defaultValue={habitRep.dateTimeDone} />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    enterPreviousHabitReps()
                }}
                className="btn btn-primary">
                Add Previous Rep
            </button>
        </form>
    )
}