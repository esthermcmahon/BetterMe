import React from "react"


export const Logout = (props) => {
    return (
        <button className="nav logout" onClick={() => props.history.push("/login")}>
            Logout
        </button>
    )
}
