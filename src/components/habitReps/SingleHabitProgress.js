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

    // const [ goal, setGoal] = useState()
    // const [goalState, setGoalState] = useState(false)

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


    // useEffect(() => {
    //     const goalOfReps = habit.goal
    //     setGoal(goalOfReps)

    // }, [goal])

    // useEffect(() => {
    //     if (currentRepsLength === goal) {
    //         setGoalState(!goalState)
    //     }
    //     console.log(goalState)
    // }, [goalState])

    useEffect(() => {
        const matchingColor = colors.find(color => habit.colorId === color.id) || {}
        setRelatedColor(matchingColor)
    }, [colors])




    return (
        <section className="singleHabitProgress">

            {filteredHabitReps.map(hr => {
                return <div className="singleHabitRep" id={relatedColor.color}></div>
            })}

            {filteredHabitReps.length / habit.goal === 1 ?  <Alert isOpen={visible} toggle={onDismiss} fade={false}>You did it!</Alert> : ""}

                </section>

    )

}


{/* <div id="popup1" class="overlay">
<div class="popup">
    <a class="close" href="#">&times;</a>
    <div class="content">You did it!</div>
</div> 
</>
: ""} */}
           