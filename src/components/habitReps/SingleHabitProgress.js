import React, { useContext, useEffect, useState } from "react"
import { HabitRepContext } from "./HabitRepProvider"
import { ColorContext } from "../colors/ColorProvider"
import { HabitContext } from "../habits/HabitProvider"
import "./HabitProgress.css"
import { Alert } from "reactstrap"



export const SingleHabitProgress = ({ habit }) => {
    const { colors, getColors } = useContext(ColorContext)
    const { habitReps, getHabitReps } = useContext(HabitRepContext)
    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);

    const [relatedColor, setRelatedColor] = useState({})
    const [filteredHabitReps, setFilteredHabitRep] = useState([])

    const [currentRepsLength, setCurrentRepsLength] = useState()


    const { habits, getHabits } = useContext(HabitContext)
  

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
        const matchingColor = colors.find(color => habit.colorId === color.id) || {}
        setRelatedColor(matchingColor)
    }, [colors])




    return (
        <section className="singleHabitProgress">

            {filteredHabitReps.map(hr => {
                return <div className="singleHabitRep" id={relatedColor.color}></div>
            })}

            {filteredHabitReps.length / habit.goal === 1 ?  <Alert class="alert" isOpen={visible} toggle={onDismiss} fade={false}>You did it!</Alert> : ""}

                </section>

    )

}


 