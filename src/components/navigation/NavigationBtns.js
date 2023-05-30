import { useState } from "react";

//component
import Modal from "../formData/Popup";
import Button from "../layout/Button";

const NavigationBtns = ({ showCardHandler }) => {

  const [showCard, setShowCard] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  const handleShowCard = () => {
    setShowCard(!showCard);
    showCardHandler(showCard);
  };

  return (
    <div className="container d-flex justify-content-between my-4">
      <Button
        className="btn btn-primary"
        onClick={() => setShowPopup(!showPopup)}
      >
        create
      </Button>
      <Button className="btn btn-secondary" onClick={handleShowCard}>
        {showCard ? "show" : "hide"}
      </Button>
      <Modal showPopup={showPopup} hidePopup={() => setShowPopup(!showPopup)} />
    </div>
  );
};

export default NavigationBtns;
