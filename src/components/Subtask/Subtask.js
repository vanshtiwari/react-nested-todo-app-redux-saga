import "./subtask.css";
import {useState} from "react";
import CheckBox from "../CheckBox/CheckBox";

function Subtask({ _id, subtask, updateSubtask}) {
    const updateSubtaskStatus = (status) => {

    }

    return (
        <div className="subtask-con">
            <input onChange={(e) => updateSubtaskStatus(e.target.checked)}
            checked={subtask.status}
                type="checkbox" />
           
            <p style={{
                    textDecoration: subtask.status ? "line-through" : "none" 
                }}>{subtask.title}</p>
        </div>
    )
}

export default Subtask;