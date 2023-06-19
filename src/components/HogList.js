import React from "react"
import HogCard from "./HogCard"

function HogList({hogData}){
    return(
        <div className="ui grid container">
            {hogData.map((hog) => (
                <HogCard hog={hog}/>
            ))}
        </div>
    )
}

export default HogList;