import { useState } from "react";

//component
import Modal from "../formData/Popup";

const NavigationBtns = ({ showCardHandler }) => {

  const [showCard, setShowCard] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  const handleShowCard = () => {
    setShowCard(!showCard);
    showCardHandler(showCard);
  };

  return (
    <div className="container d-flex justify-content-between my-4">
      <button
        className="btn btn-primary"
        onClick={() => setShowPopup(!showPopup)}
      >
        create
      </button>
      <button className="btn btn-secondary" onClick={handleShowCard}>
        {showCard ? "show" : "hide"}
      </button>
      <Modal showPopup={showPopup} hidePopup={() => setShowPopup(!showPopup)} />
    </div>
  );
};

export default NavigationBtns;
