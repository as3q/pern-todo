import React, { useState, Fragment } from "react";
import "./EditTodo.css";

const EditTodo = ({ todo }) => {
  const [description, setdescription] = useState(todo.description);

  const onClickConfirmEdit = async (evnt) => {
    evnt.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        "http://localhost:5000/todo/" + todo.todo_id,
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
    <Fragment>
      <button
        type="button"
        className="btn btn-light"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>
      <div
        className="modal fade"
        id={`id${todo.todo_id}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Todo
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                required
                type="text"
                className="form-control"
                value={description}
                onChange={(evnt) => setdescription(evnt.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={onClickConfirmEdit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
