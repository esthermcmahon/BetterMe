import React from "react"
import { Route } from "react-router-dom"
import { HabitList } from "./habits/HabitList"
import { HabitProvider } from "./habits/HabitProvider"
import { HabitForm } from "./habits/HabitForm"
import { CreateNewHabitButton } from "./habits/NewHabitButton"


export const ApplicationViews = () => {
    return (
        <>
            <Route path="/main" render={(props) => {
                return <CreateNewHabitButton {...props} />
            }} />

            
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