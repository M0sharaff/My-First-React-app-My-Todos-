function Modal(props) {
  function cancelhandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p> Are you sure about that?</p>
      <button className="btn btn--alt" onClick={cancelhandler}>
        {" "}
        cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        {" "}
        okay{" "}
      </button>
    </div>
  );
}

export default Modal;
