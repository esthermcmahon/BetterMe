import React, { useEffect, useState, useContext } from "react"
import "./header.css"
import { UserContext } from "./users/UserProvider"


export const Header = (props) => {
   const { users, getUsers } = useContext(UserContext)

   const [user, setUser] = useState({})

   useEffect(() => {
      getUsers()
   }, [])



   useEffect(() => {
      const getUserName = users.find(user => user.id === parseInt(localStorage.getItem("BetterMe__user"))) || {}
      setUser(getUserName)
   }, [user])

   // const loggedOut = props.match.params.hasOwnProperty("login") || props.match.params.hasOwnProperty("register")


   return (
    <header className="siteHeaderContainer">
    <h1 className="siteHeader">BetterMe</h1>
    {/* <p>Welcome, {user.name}</p> */}
    </header>  
   )
   
}

// {loggedOut ? "" : <p>Welcome, {user.name}</p> }