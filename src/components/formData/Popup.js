import { Fragment } from "react";
import styles from "./Popup.module.css";
import ReactDOM from "react-dom";

const Backdrop = ({hide}) => {
  return <div className={styles.backdrop} id="backdrop" onClick={() => hide()}></div>;
};

const Modal = ({showPopup, hidePopup}) => {

  return showPopup && (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <Backdrop hide={hidePopup} />
          <div
            className={`container card p-3 shadow my-5 ${styles.form}`}
            id="overlay"
          >
            <h2 className="mb-3 py-2 text-center rounded-3 border">
              Create or Edite a card
            </h2>
            <div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="name"
                />
                <label htmlFor="Name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="address"
                />
                <label htmlFor="address">Address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="Number"
                  placeholder="phone"
                />
                <label htmlFor="Number">phone</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-floating mb-3 d-flex justify-content-between">
                <button type="submit" className="btn btn-success">
                  save
                </button>
                <button className="btn btn-secondary" onClick={() => hidePopup()}>
                  cancel
                </button>
              </div>
            </div>
          </div>
        </Fragment>,
        document.getElementById("popup")
      )}
    </Fragment>
  )
};

export default Modal;