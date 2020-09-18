import React from "react"


export const Main = (props) => {
    return (
        <button className="nav main" onClick={() => props.history.push("/main")}>
            Main
        </button>
    )
}