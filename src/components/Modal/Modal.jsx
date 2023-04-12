import styles from "./Modal.module.css";
import Button from "../Button/Button";

const Modal = (props) => {
  // const {showModal, setShowModal} = props;
  return (
    <>
      {props.showModal ? <p>hello</p>: null}
    </>
  );
};

export default Modal;
