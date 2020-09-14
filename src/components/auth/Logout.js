import React from "react"


export const Logout = (props) => {
    return (
        <button onClick={() => props.history.push("/login")}>
            Logout
        </button>
    )
}
