import React from "react"
import DashboardIcon from '@material-ui/icons/Dashboard';
import "../index.css"


export const Main = (props) => {
    return (
        <button className="nav main" onClick={() => props.history.push("/main")} title="Main">
            <DashboardIcon />
        </button>
    )
}