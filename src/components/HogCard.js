import React from "react"
import HogData from "./HogData"

function HogCard({hog}) {
    return (
        <div className="card-style card ui eight wide column">
            <div className="content">
                <a className="header">{hog.name}</a>
            </div>
            <div className="image">
                <img src={hog.image} className="img-adjust"/>
            </div>

            <HogData hog={hog}/>
        </div>
    )
}

export default HogCard;