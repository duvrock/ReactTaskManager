import "./TaskViewer.css";
import TaskCard from "../task-card/TaskCard";

function TaskViewer (props) {
    return (
        <div className="task-viewer-container">
            <div className="task-list-container">
                {props.taskList.map((item) => (
                    <TaskCard 
                        key={item.id}
                        id={item.id}
                        status={item.status}
                        name={item.name}
                        dueDate={item.dueDate}
                    />
                ))}
            </div>
        </div>
    );
}

export default TaskViewer;