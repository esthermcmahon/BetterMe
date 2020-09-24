import React, { useContext, useEffect, useState } from "react"
import { HabitContext } from "./HabitProvider"
import { ColorContext } from "../colors/ColorProvider"
import "./HabitForm.css"


export const HabitForm = (props) => {
    const { habits, getHabits, addHabit, editHabit } = useContext(HabitContext)
    const { colors, getColors } = useContext(ColorContext)

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
            setHabit(selectedHabit)
        }
    }

    useEffect(() => {
        getHabits()
        getColors()
    }, [])

    useEffect(() => {
        getHabitInEditMode()
    }, [habits])


    const createNewHabit = () => {
        const colorId = parseInt(habit.colorId)
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
                goal: habit.goal,
                startDate: habit.startDate,
                userId: parseInt(localStorage.getItem("BetterMe__user")),
                colorId: colorId
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
                goal: habit.goal,
                startDate: habit.startDate,
                colorId: colorId

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
                    <input type="text" name="name" id="name" required autoFocus className="form-control habitFormInput" placeholder="Habit name" defaultValue={habit.name} onChange={handleControlledInputChange} />

                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="frequency">Frequency: </label>
                    <input type="text" name="frequency" id="frequency" required autoFocus className="form-control habitFormInput" placeholder="Frequency" defaultValue={habit.frequency} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="details">Details: </label>
                    <input type="text" name="details" id="details" required autoFocus className="form-control habitFormInput" placeholder="Details" defaultValue={habit.details} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="goal">Goal: </label>
                    <input type="text" name="goal" id="goal" required autoFocus className="form-control habitFormInput" placeholder="Optional: enter a number" defaultValue={habit.goal} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="startDate">Start date: </label>
                    <input type="date" name="startDate" id="startDate" required autoFocus className="form-control habitFormInput" defaultValue={habit.startDate} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="colorId">Color: </label>
                    <select name="colorId" className="form-control habitFormInput"
                        value={habit.colorId}
                        onChange={handleControlledInputChange}>

                        <option value="0">Choose a color</option>
                        {colors.map(color => (
                            <option key={color.id} value={color.id}>
                                {color.color}
                            </option>
                        ))}
                    </select>
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