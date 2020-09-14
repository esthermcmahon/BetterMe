import React from "react"
import { Route } from "react-router-dom"
import { HabitList } from "./habits/HabitList"
import { HabitProvider } from "./habits/HabitProvider"
import { HabitForm } from "./habits/HabitForm"
import { CreateNewHabitButton } from "./habits/NewHabitButton"
import { Logout } from "./auth/Logout"
import { HabitDetails } from "./habits/HabitDetails"
import { ColorProvider } from "./colors/ColorProvider"


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
                <ColorProvider>
                <Route path="/habits/:habitId(\d+)" render={
                    props => <HabitDetails {...props} />
                } />
                <Route path="/habits/edit/:habitId(\d+)" render={
                    props => <HabitForm {...props} />
                } />
                </ColorProvider>
            </HabitProvider>


            <HabitProvider>
                <ColorProvider>
                <Route path="/main" render={(props) => {
                    return <HabitList {...props} />
                }} />

                <Route exact path="/habits/create" render={(props) => {
                    return <HabitForm {...props} />
                }} />
                </ColorProvider>
            </HabitProvider>
        </>
    )
}