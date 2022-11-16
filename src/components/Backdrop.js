function Backdrop(props) {
  function backdropCloosing() {
    props.onCancell();
  }
  return <div className="backdrop" onclick={backdropCloosing} />;
}

export default Backdrop;
