import { Fragment, useState } from "react";
import ReactDOM from "react-dom";

// css styles 
import styles from "./Popup.module.css";

// component
import Button from "../layout/Button";

const Backdrop = ({ showPopup, hidePopup }) => {
  return (
    <div
      className={`${styles.backdrop} ${showPopup ? "" : "showEffect"}`}
      id="backdrop"
      onClick={() => hidePopup()}
    ></div>
  );
};

const Overlay = ({ showPopup, hidePopup }) => {

  const [newName, setNewName] = useState(
    {
      name: "",
      address: "",
      phone: 0,
      email: ""
    }
  )

  const saveData = () => {}

  return (
    <div
      className={`container card p-3 shadow my-5 ${styles.form} ${
        showPopup ? styles.fadein : styles.fadeout
      }`}
      id="overlay"
      role="dialog"
    >
      <h2 className="mb-3 py-2 text-center rounded-3 border">
        Create or Edite a card
      </h2>
      <form className="modal-body" onSubmit={saveData}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="Name"
            placeholder="name"
            value={newName.name}
            onChange={() => setNewName()}
          />
          <label htmlFor="Name">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="address"
            value={newName.address}
          />
          <label htmlFor="address">Address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="Number"
            placeholder="phone"
            value={newName.number}
          />
          <label htmlFor="Number">phone</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="email"
            value={newName.email}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating mb-3 d-flex justify-content-between">
          <Button type="submit" className="btn btn-success">
            save
          </Button>
          <Button className="btn btn-secondary" onClick={() => hidePopup()}>
            cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

const Modal = ({ showPopup, hidePopup }) => {
  return (
    showPopup && (
      <Fragment>
        {ReactDOM.createPortal(
          <Fragment>
            <Backdrop hidePopup={hidePopup} />
            <Overlay showPopup={showPopup} hidePopup={hidePopup} />
          </Fragment>,
          document.getElementById("popup")
        )}
      </Fragment>
    )
  );
};

export default Modal;
