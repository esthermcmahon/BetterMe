import React from "react"
import { Route } from "react-router-dom"
import { HabitProvider } from "./components/habits/HabitProvider"


export const ApplicationViews = () => {
    return (
        <>
            <HabitProvider>

            </HabitProvider>
        </>
    )
}