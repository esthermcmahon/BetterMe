import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { HabitContext } from "./HabitProvider"
import { HabitRepContext } from "../habitReps/HabitRepProvider"
import "./Habit.css"
import DoneIcon from "@material-ui/icons/Done"
import AddIcon from "@material-ui/icons/Add"
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined"
import { Modal } from "reactstrap"
import { HabitRepModal } from "../habitReps/HabitRepModal"
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation"
import MoreVertIcon from "@material-ui/icons/MoreVert"
// import { ColorContext } from "../colors/ColorProvider"



export const Habit = (props) => {
    const { getHabitById, habits, getHabits, archiveHabit } = useContext(HabitContext)
    const { addHabitRep } = useContext(HabitRepContext)
    // const { colors, getColors } = useContext(ColorContext)
    
    const [habit, setHabit] = useState({ color: {}})
    // const [color, setColor] = useState({})

    const [HRModal, setHRModal] = useState(false);
    const HRtoggle = () => setHRModal(!HRModal);


    useEffect(() => {
        const habitId = parseInt(props.habit.id)
        getHabitById(habitId)
            .then(setHabit)
  
            
    }, [])





    return (
        <section className="habitCard" id={habit.color.color}>
            <div className="habitNameSection">
                <div className="habitName" ><Link to={`/habits/${habit.id}`}>
                    {habit.name} <MoreVertIcon className="moreVertIcon"/>
                </Link></div>
            </div>

            <div className="habitCard--buttons">
                <button onClick={() => {
                    addHabitRep({
                        habitId: habit.id,
                        dateTimeDone: Date.now()
                    })
                        .then(() => props.history.push("/main"))
                }}><DoneIcon className="habitCard--materialUIButton" /></button>
                <button onClick={() => {
                    props.history.push(`/habits/${habit.id}/addHabitReps`)
                }} title="Add Previous Reps" className="addRepsButton" onClick={HRtoggle}><AddIcon className="habitCard--materialUIButton" />
                    <Modal isOpen={HRModal} className="modal">
                        <HabitRepModal habitId={habit.id} {...props} />
                        <button className="close-button" onClick={HRtoggle} title="close"><CancelPresentationIcon className="materialUIButton" /></button>
                    </Modal>
                </button>
                <button onClick={() => archiveHabit(habit.id).then(() => props.history.push("/habits/archivedHabits"))} ><ArchiveOutlinedIcon className="habitCard--materialUIButton" /></button>
            </div>

        </section>
    )
}

