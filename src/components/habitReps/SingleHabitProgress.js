import React, { useContext, useEffect, useState } from "react"
import { HabitRepContext } from "./HabitRepProvider"
import { ColorContext } from "../colors/ColorProvider"
import { HabitContext } from "../habits/HabitProvider"




export const SingleHabitProgress = ({ habit }) => {
    const { colors, getColors } = useContext(ColorContext)
    const { habitReps, getHabitReps } = useContext(HabitRepContext)
    const { habits, getHabits } = useContext(HabitContext)

    const [ relatedColor, setRelatedColor ] = useState({})
    const [filteredHabitReps, setFilteredHabitRep] = useState([])


    useEffect(() => {
        getHabitReps()
        getColors()
        getHabits()

    }, [])

    useEffect(() => {    
        const matchingHabitRepsArray = habitReps.filter(hr => hr.habitId === habit.id) || []
        setFilteredHabitRep(matchingHabitRepsArray)

    }, [habitReps])

    useEffect(() => {
        const matchingColor = colors.find(color => habit.colorId === color.id) || {}
        setRelatedColor(matchingColor)
    }, [colors])
    



    return (
        <section className="singleHabitProgress">
     
      
            
              {filteredHabitReps.map(hr => {
                  return <div className="singleHabitRep" id={relatedColor.color}></div>
              })}
            
        </section>
        
    )
   
}

