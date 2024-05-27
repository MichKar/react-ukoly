import "./AllTasks.css";
import React, { useState } from "react";
import data from "../data";

const AllTasks = () => {
  const [myTask, setMyTask] = useState(data);

  const buttonClickDelete = (idecko) => {
    const filteredTasks = myTask.filter((oneTask) => {
      return oneTask.id !== idecko;
    });
    setMyTask(filteredTasks);
  };

  const buttonDelete = () => {
    setMyTask([]);
  };

  return (
    <div>
      {myTask.map((oneTask) => {
        const { id, name } = oneTask;
        return (
          <div className="one-task" key={id}>
            <li>{name}</li>
            <button
              className="btn-delete"
              onClick={() => buttonClickDelete(id)}
            >
              Vymazat
            </button>
          </div>
        );
      })}

      <button className="btn-delete-all" onClick={buttonDelete}>
        Vymazat vše
      </button>
    </div>
  );
};

export default AllTasks;
