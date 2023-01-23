import React from "react";

function Switcher   (props)  {
        function handleSteps(e) {
            props.onClick(e.target.value)
        }
    return(
        <div>
        <input type="radio" name='stepRadio' className="switcherButton" value = {props.value} onClick={handleSteps} />
        <input type="radio" name='stepRadio' className="switcherButton" value = {props.value} onClick={handleSteps} />
        <input type="radio" name='stepRadio' className="switcherButton" value = {props.value} onClick={handleSteps} />
        </div>
    )

}



export default Switcher;