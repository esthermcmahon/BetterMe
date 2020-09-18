import React from "react"
import { Route } from "react-router-dom"
import { HabitList } from "./habits/HabitList"
import { HabitProvider } from "./habits/HabitProvider"
import { HabitForm } from "./habits/HabitForm"
import { CreateNewHabitButton } from "./habits/NewHabitButton"
import { Logout } from "./auth/Logout"
import { HabitDetails } from "./habits/HabitDetails"
import { ColorProvider } from "./colors/ColorProvider"
import { HabitRepProvider } from "./habitReps/HabitRepProvider"
import { HabitRepForm } from "./habitReps/HabitRepForm"
import { HabitProgress } from "./habitReps/HabitProgress"
import { ArchivedHabits } from "./habits/ArchivedHabits"
import { NoteProvider } from "./notes/NoteProvider"
import { NoteForm } from "./notes/NoteForm"
import { NoteList } from "./notes/NoteList"
import { RepsList } from "./habitReps/RepsList"
import { Main } from "./MainButton"
import { Header } from "./Header"


export const ApplicationViews = () => {
    return (
        <>
            <Route path="/" render={(props) => {
                return <Header {...props} />
            }} />
            <Route path="/main" render={(props) => {
                return <CreateNewHabitButton {...props} />
            }} />

            <Route path="/main" render={(props) => {
                return <Logout {...props} />
            }} />

            <Route path="/habits" render={(props) => {
                return <Main {...props} />
            }} />
            <Route path="/notes" render={(props) => {
                return <Main {...props} />
            }} />



            <HabitProvider>
                <HabitRepProvider>
                    <ColorProvider>
                        <Route exact path="/habits/:habitId(\d+)" render={
                            props => <HabitDetails {...props} />
                        } />
                        <Route exact path="/habits/:habitId(\d+)" render={
                            props => <RepsList {...props} />
                        } />
                        <Route path="/habits/edit/:habitId(\d+)" render={
                            props => <HabitForm {...props} />
                        } />
                    </ColorProvider>
                </HabitRepProvider>
            </HabitProvider>


            <HabitProvider>
                <HabitRepProvider>
                    <ColorProvider>
                        <Route path="/main" render={(props) => {
                            return <HabitProgress {...props} />
                        }} />
                        <Route path="/main" render={(props) => {
                            return <HabitList {...props} />
                        }} />

                        <Route exact path="/habits/create" render={(props) => {
                            return <HabitForm {...props} />
                        }} />
                    </ColorProvider>
                </HabitRepProvider>
            </HabitProvider>

            <HabitProvider >
                <HabitRepProvider>
                    <Route exact path="/habits/:habitId(\d+)/addHabitReps" render={(props) => {
                        return <HabitRepForm {...props} />
                    }} />
                </HabitRepProvider>
            </HabitProvider>

            <HabitProvider>
                <Route exact path="/habits/archivedHabits" render={(props) => {
                    return <ArchivedHabits {...props} />
                }} />
            </HabitProvider>

            <HabitProvider>
                <NoteProvider>
                    <Route exact path="/habits/:habitId(\d+)/notes/create" render={(props) => {
                        return <NoteForm {...props} />
                    }} />

                    <Route exact path="/notes/:noteId(\d+)/edit" render={(props) => {
                        return <NoteForm {...props} />
                    }} />
                </NoteProvider>
            </HabitProvider>

            <HabitProvider>
                <NoteProvider>
                    <Route exact path="/habits/:habitId(\d+)" render={(props) => {
                        return <NoteList {...props} />
                    }} />
                </NoteProvider>
            </HabitProvider>
        </>
    )
}