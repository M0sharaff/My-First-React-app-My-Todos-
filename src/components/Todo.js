import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { useState } from "react";

function Todo(props) {
  const [isModelOpen, setModalOpen] = useState(false);

  function eventHandler() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div className="card">
      <h2 className="title">{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={eventHandler}>
          Done
        </button>
        <button className="btn" onClick={eventHandler}>
          Delete
        </button>
      </div>
      {isModelOpen && <Modal onCancel={closeModal} onConfirm={closeModal} />}
      {isModelOpen && <Backdrop onCancell={closeModal} />}
    </div>
  );
}

export default Todo;
