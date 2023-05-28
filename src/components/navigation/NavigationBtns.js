import { useState } from "react";

const NavigationBtns = ({ showCardHandler, showPopupHandler }) => {

  const [showPopup, setShowPopup] = useState(false);

  const [showCard, setShowCard] = useState(false);

  const handleShowCard = () => {
    setShowCard(!showCard);
    showCardHandler(showCard);
  };

  const handleShowPopup = () => {
    setShowPopup(true);
    showPopupHandler(showPopup);
  };

  return (
    <div className="container d-flex justify-content-between my-4">
      <button className="btn btn-primary" onClick={handleShowPopup}>
        create
      </button>
      <button className="btn btn-secondary" onClick={handleShowCard}>
        {showCard ? "show" : "hide"}
      </button>
    </div>
  );
};

export default NavigationBtns;
