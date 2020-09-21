import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { HabitContext } from "./HabitProvider"
import { HabitRepContext } from "../habitReps/HabitRepProvider"
import "./Habit.css"
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import DoneIcon from "@material-ui/icons/Done"
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import { Modal } from "reactstrap"
import { HabitRepForm } from "../habitReps/HabitRepForm"



export const Habit = (props) => {
    const { getHabitById, archiveHabit } = useContext(HabitContext)
    const { addHabitRep } = useContext(HabitRepContext)

    const [habit, setHabit] = useState({ color: {} })


    useEffect(() => {
        const habitId = parseInt(props.habit.id)
        getHabitById(habitId)
            .then(setHabit)
    }, [])

    const [showDialog, setShowDialog] = React.useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);

    const [HRModal, setHRModal] = useState(false);

    const HRtoggle = () => setHRModal(!HRModal);

  



    return (
        <section className="habitCard" id={habit.color.color}>
            <div className="habitName" ><Link to={`/habits/${habit.id}`}>
                {habit.name}
            </Link></div>


            <button onClick={() => {
                addHabitRep({
                    habitId: habit.id,
                    dateTimeDone: Date.now()
                })
                    .then(() => props.history.push("/main"))
            }}><DoneIcon className="materialUIButton"/></button>
            <button onClick={open} ><MoreHorizIcon className="materialUIButton"/> </button>
            <Dialog className="dialog" isOpen={showDialog} onDismiss={close}>
                <button className="close-button" onClick={close} title="close"><CancelPresentationIcon className="materialUIButton"/></button>
                <button onClick={() => {
                    props.history.push(`/habits/${habit.id}/addHabitReps`)
                }} title="Add Previous Reps" onClick={HRtoggle} className="addRepsButton">Add Previous Reps
                    <Modal isOpen={HRModal}>
                        <HabitRepForm {...props} />
                        <button className="close-button" onClick={HRtoggle} title="close"><CancelPresentationIcon className="materialUIButton"/></button>
                    </Modal>
                </button>
                <button onClick={() => archiveHabit(habit.id).then(() => props.history.push("/habits/archivedHabits"))} >Save for later</button>
            </Dialog>

        </section>
    )
}