import React, { useContext, useEffect, useState } from "react"
import { HabitContext } from "./HabitProvider"


export const HabitForm = (props) => {
    const { habits, getHabits, addHabit } = useContext(HabitContext)

    //component state
    const [habit, setHabit] = useState({})

    useEffect(() => {
       getHabits()
    }, [])

    const handleControlledInputChange = (event) => {
        const newHabit = Object.assign({}, habit)          // Create copy
        newHabit[event.target.name] = event.target.value    // Modify copy
        setHabit(newHabit)                                 // Set copy as new state
    }


    const createNewHabit = () => {

        if (habit.habitName) {
            addHabit({
                userId: localStorage.getItem("BetterMe__user"),
                name: habit.habitName,
                frequency: habit.habitFrequency,
                archive: false,
                details: habit.habitDetails,
                startDate: habit.habitDate
                //add colorId

            })
            .then(() => props.history.push("/main"))
        } else {
            window.alert("Please complete all fields")
          
        }
    }

    return (
        <form className="habitForm">
            <h2 className="habitForm__title">New Habit</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="habitName">Habit name: </label>
                    <input type="text" name="habitName" id="habitName" required autoFocus className="form-control" placeholder="Habit name" defaultValue={habit.habitName} onChange={handleControlledInputChange}/>

                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="habitFrequency">Frequency: </label>
                    <input type="text" name="habitFrequency" id="habitFrequency" required autoFocus className="form-control" placeholder="Frequency" defaultValue={habit.habitFrequency} onChange={handleControlledInputChange}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="habitDetails">Details: </label>
                    <input type="text" name="habitDetails" id="habitDetails" required autoFocus className="form-control" placeholder="Details" defaultValue={habit.habitDetails} onChange={handleControlledInputChange}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="habitDate">Start date: </label>
                    <input type="date" name="habitDate" id="habitDate" required autoFocus className="form-control" onChange={handleControlledInputChange}/>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    createNewHabit()
                }}
                className="btn btn-primary">
                Save Habit
            </button>
        </form>
    )
}