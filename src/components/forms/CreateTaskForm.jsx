import React, { useState } from 'react';
import "./CreateTaskForm.css";

const CreateTaskForm = () => {

    const initialFormData = {  
        taskName: "",
        dueDate: "", 
        taskDetails: ""
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name] : event.target.value,
        }));
    };

    const handleSubmit = (event) => {
       event.preventDefault();
       console.log("formData", formData);

       resetForm();
    };

    const resetForm = () => {
        setFormData(initialFormData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-row'>
                    <label className='label-md'>Task Name</label>
                    <input value={formData.taskName} name="taskName" onChange={handleInputChange} className='input-primary' type="text" />
                </div>

                <div className='form-row'>
                    <label className='label-md'>Due Date</label>
                    <input value={formData.dueDate} name="dueDate" onChange={handleInputChange} className='input-primary' type="date" />
                </div>

                <div className='form-row'>
                    <label className='label-md'>Task details</label>
                    <textarea value={formData.taskDetails} name="taskDetails" onChange={handleInputChange} className='input-primary' cols="30" rows="10"></textarea>
                </div>

                <button className='button-primary' type='submit'>Create Task</button>
            </form>
        </div>
    );
};

export default  CreateTaskForm;