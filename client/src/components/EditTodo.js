import React, { useState } from "react";
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
    <>
      <button
        type="button"
        class="btn btn-light"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>
      <div
        class="modal fade"
        id={`id${todo.todo_id}`}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Todo
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <input
                required
                type="text"
                className="form-control"
                value={description}
                onChange={(evnt) => setdescription(evnt.target.value)}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-success"
                onClick={onClickConfirmEdit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo;
