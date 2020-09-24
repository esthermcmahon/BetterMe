import React, { useContext, useEffect, useState } from "react"
import { HabitRepContext } from "./HabitRepProvider"
import { ColorContext } from "../colors/ColorProvider"
import { HabitContext } from "../habits/HabitProvider"




export const SingleHabitProgress = ({ habit }) => {
    const { colors, getColors } = useContext(ColorContext)
    const { habitReps, getHabitReps } = useContext(HabitRepContext)
   

    const [ relatedColor, setRelatedColor ] = useState({})
    const [filteredHabitReps, setFilteredHabitRep] = useState([])
    
    const [currentRepsLength, setCurrentRepsLength] = useState()

    const [ goal, setGoal] = useState()
    const [goalState, setGoalState] = useState(false)

     const { habits, getHabits } = useContext(HabitContext)
    // const [habitWithGoal, setHabitWithGoal] = useState({})
    // console.log(habit)
    // const habitId = props.key

    useEffect(() => {
        getHabitReps()
        getColors()
        getHabits()

    }, [])

    useEffect(() => {    
        const matchingHabitRepsArray = habitReps.filter(hr => hr.habitId === habit.id) || []
        setFilteredHabitRep(matchingHabitRepsArray)
        const numberOfReps = matchingHabitRepsArray.length
        setCurrentRepsLength(numberOfReps)       
    }, [habitReps], [currentRepsLength])


    useEffect(() => {
        const goalOfReps = habit.goal
        setGoal(goalOfReps)

    }, [goal])

    useEffect(() => {
        if (currentRepsLength === goal) {
            setGoalState(!goalState)
        }
        console.log(goalState)
    }, [goalState])

    useEffect(() => {
        const matchingColor = colors.find(color => habit.colorId === color.id) || {}
        setRelatedColor(matchingColor)
    }, [colors])
    
  


    return (
        <section className="singleHabitProgress">
            
              {filteredHabitReps.map(hr => {
                  return <div className="singleHabitRep" id={relatedColor.color}></div>
              })}
              {goalState ? <p>You did it!</p> : ""}
            
        </section>
        
    )
   
}

