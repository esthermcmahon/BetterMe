import React from "react"
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import "../index.css"


export const Main = (props) => {
    return (
        <button className="nav main" onClick={() => props.history.push("/main")} title="Main">
            <HomeOutlinedIcon />
        </button>
    )
}