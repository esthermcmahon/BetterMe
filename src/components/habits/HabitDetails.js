import React, { useContext, useEffect, useState } from "react"
import { HabitContext } from "./HabitProvider"
import { HabitRepContext } from "../habitReps/HabitRepProvider"
// import { ColorContext } from "../colors/ColorProvider"
import "./Habit.css"
import "./HabitDetails.css"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import AddIcon from "@material-ui/icons/Add"
import NoteAddOutlinedIcon from "@material-ui/icons/NoteAddOutlined"
import DoneIcon from "@material-ui/icons/Done"
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined"
import { Modal } from "reactstrap"
import { HabitRepForm } from "../habitReps/HabitRepForm"
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation"
import { NoteForm } from "../notes/NoteForm"



export const HabitDetails = (props) => {
    const { getHabitById, habits, deleteHabit, getHabits, archiveHabit } = useContext(HabitContext)
    const { addHabitRep } = useContext(HabitRepContext)
    // const { colors, getColors } = useContext(ColorContext)

    const [habit, setHabit] = useState({color:{}})
    // const [color, setColor] = useState({})


    const [HRModal, setHRModal] = useState(false);
    const HRtoggle = () => setHRModal(!HRModal);

    const [noteModal, setNoteModal] = useState(false);
    const noteToggle = () => setNoteModal(!noteModal);

    // useEffect(() => {
    //     getHabits()
    //     // getColors()
    // }, [])

    // useEffect(() => {
    //     const matchingHabit = habits.find(habit => habit.id === parseInt(props.match.params.habitId)) || {}
    //     setHabit(matchingHabit)
    // }, [habit])

    useEffect(() => {
        const habitId = parseInt(props.match.params.habitId)
        getHabitById(habitId)
            .then(setHabit)
            
    }, [])
    // useEffect(() => {

    //     const matchingColor = colors.find(color => habit.colorId === color.id) || {} //returns habit
    //     setColor(matchingColor)

    // }, [colors])



    return (
        <section className="habitDetails" id={habit.color.color}>
            <div className="habitDetailsCard">
                <h3 className="habitName">{habit.name}</h3>
                <div className="dateFrequencyDetails">
                    <div className="habitDate">Start Date: {new Date(habit.startDate).toLocaleDateString('en-US')}</div>
                    <div className="habitFrequency">Frequency goal: {habit.frequency}</div>
                    <div className="hDetails">Details: {habit.details}</div>
                </div>
                <button className="habitDetailsButton" onClick={() => {
                    addHabitRep({
                        habitId: habit.id,
                        dateTimeDone: Date.now()
                    })
                        .then(() => props.history.push("/main"))
                }}><DoneIcon className="materialUIButton" /></button>
                <button onClick={() => {
                    props.history.push(`/habits/${habit.id}/addHabitReps`)
                }} title="Add Previous Reps" onClick={HRtoggle} className="addRepsButton"><AddIcon className="materialUIButton " />
                    <Modal isOpen={HRModal} className="modal">
                        <HabitRepForm {...props} />
                        <button className="close-button" onClick={HRtoggle} title="close"><CancelPresentationIcon className="materialUIButton" /></button>
                    </Modal>
                </button>
                <button onClick={() => deleteHabit(habit.id).then(() => props.history.push("/main"))}><DeleteIcon className="materialUIButton" /></button>
                <button onClick={() => archiveHabit(habit.id).then(() => props.history.push("/habits/archivedHabits"))} title="Save For Later"><ArchiveOutlinedIcon className="materialUIButton" /></button>
                <button onClick={() => {
                    props.history.push(`/habits/edit/${habit.id}`)
                }}><EditIcon className="materialUIButton" /></button>
                <button onClick={() => {
                    props.history.push(`/habits/${habit.id}/notes/create`)
                }} title="Add a Note" onClick={noteToggle}><NoteAddOutlinedIcon className="materialUIButton" />
                    <Modal isOpen={noteModal} className="modal">
                        <NoteForm {...props} />
                        <button className="close-button" onClick={noteToggle} title="close"><CancelPresentationIcon className="materialUIButton" /></button>
                    </Modal>
                </button>
            </div>
        </section>
    )
}

