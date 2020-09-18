import React from "react"


export const Main = (props) => {
    return (
        <button onClick={() => props.history.push("/main")}>
            Main
        </button>
    )
}