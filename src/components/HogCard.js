import React from "react"

function HogCard({hog}) {
    return (
        <div className="card ui eight wide column">
            <div className="content">
                <a className="header">{hog.name}</a>
            </div>
            <div className="image img-adjust">
                <img src={hog.image}/>
            </div>
        </div>
    )
}

export default HogCard;