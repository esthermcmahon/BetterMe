import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { HabitContext } from "./HabitProvider"
import { HabitRepContext } from "../habitReps/HabitRepProvider"
import "./Habit.css"
import DoneIcon from "@material-ui/icons/Done"
import AddBoxIcon from "@material-ui/icons/AddBox"
import ArchiveIcon from "@material-ui/icons/Archive"




export const Habit = (props) => {
    const { getHabitById, archiveHabit } = useContext(HabitContext)
    const { addHabitRep } = useContext(HabitRepContext)

    const [habit, setHabit] = useState({ color: {} })


    useEffect(() => {
        const habitId = parseInt(props.habit.id)
        getHabitById(habitId)
            .then(setHabit)
    }, [])

    // const [showDialog, setShowDialog] = React.useState(false);
    // const open = () => setShowDialog(true);
    // const close = () => setShowDialog(false);

    // const [HRModal, setHRModal] = useState(false);

    // const HRtoggle = () => setHRModal(!HRModal);

  



    return (
        <section className="habitCard" id={habit.color.color}>
            <div className="habitName" ><Link to={`/habits/${habit.id}`}>
                {habit.name}
            </Link></div>

            <div className="habitCard--buttons">
            <button onClick={() => {
                addHabitRep({
                    habitId: habit.id,
                    dateTimeDone: Date.now()
                })
                    .then(() => props.history.push("/main"))
            }}><DoneIcon className="habitCard--materialUIButton"/></button>
                <button onClick={() => {
                    props.history.push(`/habits/${habit.id}/addHabitReps`)
                }} title="Add Previous Reps" className="addRepsButton"><AddBoxIcon className="habitCard--materialUIButton" />
                </button>
                <button onClick={() => archiveHabit(habit.id).then(() => props.history.push("/habits/archivedHabits"))} ><ArchiveIcon className="habitCard--materialUIButton" /></button>
                </div>

        </section>
    )
}

{/* 
    onClick={HRtoggle}
    <Modal isOpen={HRModal} className="modal">
<HabitRepForm {...props} />
<button className="close-button" onClick={HRtoggle} title="close"><CancelPresentationIcon className="materialUIButton"/></button>
</Modal> */}