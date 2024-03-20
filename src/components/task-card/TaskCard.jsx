// import React, { useState } from "react";
import "./TaskCard.css";
// import Badge from "../badge/Badge";
// import DateContainer from "../date-container/DateContainer";


function TaskCard() {
    const id = "T-1";
    const name = "Create a design sistem for worspace";
    const status = "Todo";
    const dueDate = new Date(2024, 1, 23);


    return (
        <div className="card-wrapper">
            <div className="card-header">
                <p className="task-id">{id}</p>
                <p>{status}</p>
            </div>
            <div className="card-content">
                <p>{name}</p>
            </div>
            <div className="card-footer">
                <p>{dueDate.toLocaleDateString()}</p>
            </div>

        </div>
    );
}

export default TaskCard;