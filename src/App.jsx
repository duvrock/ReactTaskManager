import './App.css';
// import TaskCard from './components/task-card/TaskCard';
import TaskViewer from './components/task-viewer/TaskViewer';
import React from 'react';

function App() {
  const data =[
    {
      id: "T-1",
      name:"Create a design sistem for worspace",
      status: "Todo",
      dueDate: new Date(2024, 1, 23),
    },
    {
      id: "T-2",
      name:"Create a design sistem for worspace 2",
      status: "In progres",
      dueDate: new Date(2024, 1, 23),
    },
    {
      id: "T-3",
      name:"Create a design sistem for worspace 3",
      status: "Complete",
      dueDate: new Date(2024, 1, 23),
    }
  ];
  
  // return React.createElement(
  //   "div",
  //   { className: "app-container" },
  //   React.createElement(
  //     "div",
  //     {className: "app-content"},
  //     React.createElement("h3", {},""),
  //     React.createElement(TaskViewer, {taskList: data})
  //   )
  // );

  return (
    <div className="app-container">
      <div className="app-content" >
        <h3>Task Manager</h3>
        <TaskViewer taskList={data}/>
      </div>
    </div>
  );
}

export default App;
