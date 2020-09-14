import React, { useContext, useEffect, useState } from "react"
import { HabitContext } from "./HabitProvider"


export const HabitForm = (props) => {
    const { habits, getHabits, addHabit, editHabit } = useContext(HabitContext)

    //component state
    const [habit, setHabit] = useState({name:""})

    const editMode = props.match.params.hasOwnProperty("habitId")

    const handleControlledInputChange = (event) => {
        const newHabit = Object.assign({}, habit)          // Create copy
        newHabit[event.target.name] = event.target.value    // Modify copy
        setHabit(newHabit)                                 // Set copy as new state
    }

    const getHabitInEditMode = () => {
        if (editMode) {
            const habitId = parseInt(props.match.params.habitId)
            const selectedHabit = habits.find(habit => habit.id === habitId) || {}
            console.log(selectedHabit)
            setHabit(selectedHabit)
        }
    }

    useEffect(() => {
        getHabits()
    }, [])

    useEffect(() => {
        getHabitInEditMode()
    }, [habits])


    const createNewHabit = () => {
        debugger
        if (habit.name === "") {
            
            window.alert("Please name your habit")
            return           
        }
        if (editMode) {
            editHabit({
                id: habit.id,
                name: habit.name,
                frequency: habit.frequency,
                archive: false,
                details: habit.details,
                startDate: habit.startDate,
                userId: parseInt(localStorage.getItem("BetterMe__user"))
            })
                .then(() => props.history.push("/main"))
        }
        else {

            addHabit({
                userId: parseInt(localStorage.getItem("BetterMe__user")),
                name: habit.name,
                frequency: habit.frequency,
                archive: false,
                details: habit.details,
                startDate: habit.startDate
                //add colorId

            })
                .then(() => props.history.push("/main"))
        }

    }

    return (
        <form className="habitForm">
            <h2 className="habitForm__title">New Habit</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Habit name: </label>
                    <input type="text" name="name" id="name" required autoFocus className="form-control" placeholder="Habit name" defaultValue={habit.name} onChange={handleControlledInputChange} />

                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="frequency">Frequency: </label>
                    <input type="text" name="frequency" id="frequency" required autoFocus className="form-control" placeholder="Frequency" defaultValue={habit.frequency} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="details">Details: </label>
                    <input type="text" name="details" id="details" required autoFocus className="form-control" placeholder="Details" defaultValue={habit.details} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="startDate">Start date: </label>
                    <input type="date" name="startDate" id="startDate" required autoFocus className="form-control" defaultValue={habit.startDate} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    createNewHabit()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Save Habit"}
            </button>
        </form>
    )
}