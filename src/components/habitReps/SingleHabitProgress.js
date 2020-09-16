import React, { useContext, useEffect, useState } from "react"
import { HabitRepContext } from "./HabitRepProvider"
import { ColorContext } from "../colors/ColorProvider"



export const SingleHabitProgress = ({ habit }) => {
    const { colors, getColors } = useContext(ColorContext)
    const { habitReps, getHabitReps } = useContext(HabitRepContext)

    const [ relatedColor, setRelatedColor ] = useState({})
    const [filteredHabitReps, setFilteredHabitRep] = useState([])

    useEffect(() => {
        getHabitReps()
        getColors()

    }, [])

    useEffect(() => {    
        const matchingHabitRepsArray = habitReps.filter(hr => hr.habitId === habit.id) || []
        setFilteredHabitRep(matchingHabitRepsArray)

    }, [habitReps])

    useEffect(() => {
        const matchingColor = colors.find(color => habit.colorId === color.id) || {}
        setRelatedColor(matchingColor)
    }, [colors])

    const showColors = (string, num) => {
        if (num < 1) {
            return ""
        } else if (num === 1) {
            return string
        } else {
            return string + showColors(string, num - 1)
        }

    }


    return (
        <section className="singleHabitProgress">
        <h3>{habit.name}: {filteredHabitReps.length}</h3>
            
                <div> {showColors(relatedColor.color, filteredHabitReps.length)}</div>
            
        </section>
        
    )
   
}



