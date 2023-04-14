import styles from "./Modal.module.css";
import Button from "../Button/Button";

const Modal = (props) => {

  const closeModal =  () => {props.setShowModal(prev => !prev)}

  // const {showModal, setShowModal} = props;
  return (
    <>
      {!props.showModal ? 
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles["modal-control"]}>
            <div className={styles["modal-header"]}>
              <h2 className="modal-title">{props.title}</h2>
            </div>
            <div className={styles["modal-body"]}>{props.message}</div>
            <div>
              <Button type="button" style={styles["modal-button"]} aria-label='Close modal' onClick={closeModal}>
                Okay
              </Button>
            </div>
          </div>
        </div>
       : null}
    </>
  );
};

export default Modal;
