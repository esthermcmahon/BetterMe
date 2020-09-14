import React from "react"
import { Route } from "react-router-dom"
import { HabitList } from "./habits/HabitList"
import { HabitProvider } from "./habits/HabitProvider"
import { HabitForm } from "./habits/HabitForm"


export const ApplicationViews = () => {
    return (
        <>
            <HabitProvider>
                <HabitList />

                <Route exact path="/habits/create" render={(props) => {
                            return <HabitForm {...props} />
                        }} />
            </HabitProvider>
        </>
    )
}