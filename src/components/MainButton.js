import React from "react"
import DashboardIcon from '@material-ui/icons/Dashboard';


export const Main = (props) => {
    return (
        <button className="nav main" onClick={() => props.history.push("/main")} title="Main">
            <DashboardIcon />
        </button>
    )
}