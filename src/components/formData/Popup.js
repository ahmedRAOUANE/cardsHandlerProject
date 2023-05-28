import { Fragment, useState } from "react";
import styles from "./Popup.module.css";
import ReactDOM from "react-dom";

const Backdrop = () => {
  return <div className={styles.backdrop} id="backdrop"></div>;
};

const Modal = (show) => {
  const [showen, setShowen] = useState(show);

  const cancel = (show) => {
    console.log(show);
    setShowen(!showen);
  };

  return !showen ? (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <Backdrop />
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
                <button className="btn btn-secondary" onClick={() => cancel(show)}>
                  cancel
                </button>
              </div>
            </div>
          </div>
        </Fragment>,
        document.getElementById("popup")
      )}
    </Fragment>
  ) : null;
};

export default Modal;
