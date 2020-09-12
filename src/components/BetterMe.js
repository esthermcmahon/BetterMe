import React from "react"
import {Route, Redirect} from "react-router-dom"
import {ApplicationViews} from "./ApplicationViews"
//add navbar
import {Login} from "./auth/Login"
import {Register} from "./auth/Register"
//add BetterMe.css

export const BetterMe = () => (
    <>
        <Route render={()=> {
            if (localStorage.getItem("BetterMe__user")) {
            return (
                <>
                <Route render={props => <ApplicationViews {...props} />} />
                </>
            )
        } else {
            return <Redirect to="/login" />
        }
        }} />
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)
