import React, {useState, useContext, useEffect} from "react"
import { HabitContext } from "../habits/HabitProvider"
import { HabitRepContext } from "./HabitRepProvider"
import { SingleHabitProgress } from "./SingleHabitProgress"

export const HabitProgress = (props) => {
    const {habits, getHabits} = useContext(HabitContext)
    const {habitReps, getHabitReps} = useContext(HabitRepContext)


    const [habit, setHabit] = useState({})
    const [habitRep, setHabitRep] = useState({})

    const [ relatedHabit, setRelatedHabit ] = useState({})
    

    useEffect(() => {
        getHabits()
    
    }, [])

    // // useEffect(() => {
    //     const matchingHabit = habits.find(habit => habit.id === habitRep.habitId) || {}
    //     setRelatedHabit(matchingHabit)
        
    // // }, [habits])

    useEffect(() => {
       
        const matchingHabit = habits.find(habit => habit.id === habitRep.habitId) || {} //returns habit
        setRelatedHabit(matchingHabit)
       
        }, [habits])

    return (

        <section className="habitProgress">
            {
                habits.map(habit => <SingleHabitProgress key={habit.id} {...props} habit={habit} />)
            } 
        </section>
    )
}
            
        {/* </section>
        <section className="habitProgress">
            <h3>{habit.name}: {habitReps.length} </h3>

        </section>
       */}

    

