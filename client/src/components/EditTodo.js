import React, { useState } from "react";
import "./EditTodo.css";

const EditTodo = (props) => {
  const [description, setdescription] = useState(props.todo.description);

  const onSubmitEdit = async (evnt) => {
    evnt.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        "http://localhost:5000/todo/" + props.todo.todo_id,
        {
          method: "PUT",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(body);
      window.location = "/";
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1 className="modal-title">Edit Todo</h1>
        </div>
        <div className="body">
          <input
            required
            type="text"
            className="form-control"
            value={description}
            onChange={(evnt) => setdescription(evnt.target.value)}
          />
        </div>
        <div className="footer">
          <button
            type="button"
            data-dismiss="modal"
            className="btn btn-light mt-3 mr-2"
            onClick={() => {
              props.closeEdit([false, ""]);
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-success mt-3 ml-2"
            onClick={onSubmitEdit}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
