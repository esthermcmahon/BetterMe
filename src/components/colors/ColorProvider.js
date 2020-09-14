import React, { useState } from "react"

export const ColorContext = React.createContext()

export const ColorProvider = (props) => {
    const [colors, setColors] = useState([])

    const getColors = () => {
        return fetch("http://localhost:8088/colors")
            .then(res => res.json())
            .then(setColors)
    }

    return (
        <ColorContext.Provider value={{
            colors, getColors
        }}>
            {props.children}
        </ColorContext.Provider>
    )


}