import React from "react"
// import { Route } from "react-router-dom"
import { HabitList } from "./habits/HabitList"
import { HabitProvider } from "./habits/HabitProvider"


export const ApplicationViews = () => {
    return (
        <>
            <HabitProvider>
                <HabitList />
            </HabitProvider>
        </>
    )
}