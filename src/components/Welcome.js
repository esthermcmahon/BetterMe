import React, { useEffect, useState, useContext } from "react"
import { UserContext } from "./users/UserProvider"
import "./header.css"



export const Welcome = () => {
    const { users, getUsers } = useContext(UserContext)

    const [user, setUser] = useState({})

    useEffect(() => {
        getUsers()
    }, [])


    useEffect(() => {
        const getUserName = users.find(user => user.id === parseInt(localStorage.getItem("BetterMe__user"))) || {}
        setUser(getUserName)
    }, [user])

    return (
        <div className="welcomeContainer">

            <p> Welcome, {user.name}!</p >

        </div>

    )
}

