"use client";

import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const CreateContent = () => {
  const [title, setTitlte] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [important, setImportant] = useState(false);

  const handleChange = (name: string) => (e: any) => {
    switch (name) {
      case "title":
        setTitlte(e.target.value)
        break;

      case "description":
        setDescription(e.target.value);
        break;

      case "date":
        setDate(e.target.value);
        break;

      case "completed":
        setCompleted(e.target.value);
        break;

      case "important":
        setImportant(e.target.value);
        break;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const task = {
      title,
      description,
      date,
      completed,
      important
    }

    try {
      const res = await axios.post("/api/tasks", task);

      if (res.data.error) {
        toast.error(res.data.error);
      }

      toast.success("Task created succsefully");
    } catch (error) {
      toast.error('Something went wrong');
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Create a Task</h1>

      <div className="input-control">
        <label htmlFor="title">Title</label>
        <input 
          type="text"
          id="title"
          value={title}
          name="title"
          onChange={handleChange("title")}
          placeholder="type title please"
        />
      </div>

      <div className="input-control">
        <label htmlFor="description">Description</label>

        <textarea 
          id="description"
          value={description}
          rows={4}
          onChange={handleChange("description")}
          placeholder="type title please"
        />
      </div>      

      <div className="input-control">
        <label htmlFor="date">Date</label>
      
        <input 
          type="date"
          id="date"
          value={date}
          name="date"
          onChange={handleChange("date")}
          placeholder="type title please"
        />
      </div>

      <div className="input-control">
        <label htmlFor="completed">Toggle Completed</label>
      
        <input 
          value={completed.toString()}
          onChange={handleChange('completed')}
          type="checkbox"
          name="completed"
          id="completed"
        />
      </div>

      <div className="input-control">
        <label htmlFor="important">Toggle Completed</label>
      
        <input 
          value={completed.toString()}
          onChange={handleChange('important')}
          type="checkbox"
          name="important"
          id="important"
        />
      </div>

      <div className="submit-btn">
        <button className="submit">
          <span>Submit</span>
        </button>
      </div>
    </form>
  )
}

export default CreateContent;
