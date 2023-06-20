import React from "react"

function HogData({hog}) {
    return (
        <div>
            <h4>Specialty: {hog.specialty}</h4>
            <h4>Weight: {hog.weight}</h4>
            <h4>Greased: {hog.greased? "True": "False"}</h4>
            <h4>Highes Medal Achieved: {hog["highest medal achieved"]}</h4>
        </div>
    )
}

export default HogData;