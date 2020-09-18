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

    // const showColors = (string, num) => {
    //     if (num < 1) {
    //         return ""
    //     } else if (num === 1) {
    //         return string
    //     } else {
    //         return string + showColors(string, num - 1)
    //     }
    // }

    // const colorBox = 
    
    // const colorClass = relatedColor.color
    



    return (
        <section className="singleHabitProgress">
        <h3>{habit.name}: {filteredHabitReps.length}</h3>
      
            
              {filteredHabitReps.map(hr => {
                  return <div className="singleHabitRep" id={relatedColor.color}></div>
              })}
            
        </section>
        
    )
   
}

// /* if needed, create function outside of return where className=function and function returns "singleHabit Rep +" {relatedColor.color}
// // return (
// //     <section className="singleHabitProgress">
// //     <h3>{habit.name}: {filteredHabitReps.length}</h3>
// //     <div className="singleHabitRep"></div>
        
// //           {filteredHabitReps.map(hr => {
// //               return <div className="singleHabitRep"></div>
// //           })}
        
// //     </section>