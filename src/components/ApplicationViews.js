import React from "react"
import { Route } from "react-router-dom"
import { HabitList } from "./habits/HabitList"
import { HabitProvider } from "./habits/HabitProvider"
import { HabitForm } from "./habits/HabitForm"
import { CreateNewHabitButton } from "./habits/NewHabitButton"
import { Logout } from "./auth/Logout"
import { HabitDetails } from "./habits/HabitDetails"


export const ApplicationViews = () => {
    return (
        <>
            <Route path="/main" render={(props) => {
                return <CreateNewHabitButton {...props} />
            }} />

            <Route path="/main" render={(props) => {
                return <Logout {...props} />
            }} />

            <HabitProvider>
                <Route path="/habits/:habitId(\d+)" render={
                    props => <HabitDetails {...props} />
                } />
                <Route path="/habits/edit/:habitId(\d+)" render={
                    props => <HabitForm {...props} />
                } />
            </HabitProvider>


            <HabitProvider>
                <Route path="/main" render={(props) => {
                    return <HabitList {...props} />
                }} />

                <Route exact path="/habits/create" render={(props) => {
                    return <HabitForm {...props} />
                }} />
            </HabitProvider>
        </>
    )
}