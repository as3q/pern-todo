import React from "react";

const ModalTest = () => {
  console.log("hey");
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1 className="modal-title">Edit Todo</h1>
        </div>
        <div className="body">
          <input required type="text" className="form-control" />
        </div>
        <div className="footer">
          <button
            type="button"
            data-dismiss="modal"
            className="btn btn-light mt-3 mr-2"
          >
            Cancel
          </button>
          <button type="button" className="btn btn-success mt-3 ml-2">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTest;
