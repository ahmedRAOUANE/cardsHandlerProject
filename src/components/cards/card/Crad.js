import { useState } from "react";

// React icons
import { HiPencilAlt, HiX } from "react-icons/hi";

// components
import Modal from "../../formData/Popup";

// css styles
import style from "./Card.module.css";

const Card = ({ member, handleNameList }) => {

  const [showPopup, setShowPopup] = useState(false);

  const  {id, name, age, address, number, email} = member;

  return (
    <div className="col col-md-4" id={id}>
      <div className="card m-2 p-3 shadow">
        <div className={`${style.controlBtns} d-flex justify-content-end`}>
          <button
            className={`btn btn-outline-success me-2 rounded-circle`}
            onClick={() => setShowPopup(!showPopup)}
          >
            <HiPencilAlt />
          </button>
          <button
            className={`btn btn-outline-danger me-2 rounded-circle`}
            onClick={() => handleNameList(id)}
          >
            <HiX />
          </button>
        </div>
        <div>
          <h5 className="card-title">{name}</h5>
          <ul className="card-body my-3 p-2 list-unstyled">
            <li className="card-text">age: {age}</li>
            <li className="card-text">address: {address}</li>
            <li className="card-text">number: {number}</li>
            <li className="card-text">email: {email}</li>
          </ul>
          <a href="/" className="btn btn-primary">
            go some where
          </a>
        </div>
      </div>
      <Modal showPopup={showPopup} hidePopup={() => setShowPopup(!showPopup)} />
    </div>
  );
};

export default Card;
