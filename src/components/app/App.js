import { useState } from "react";

// css styles
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Header from "../header/Header";
import CardList from "../cards/cardList/CardList";
import NavigationBtns from "../navigation/NavigationBtns";

function App() {
  const [nameList, setNameList] = useState([
    {
      id: 1,
      name: "John Smith",
      age: 30,
      address: "123 Main St, Anytown USA",
      phone: "555-123-4567",
      email: "john.smith@example.com",
    },
    {
      id: 2,
      name: "Jane Doe",
      age: 25,
      address: "456 Elm St, Anytown USA",
      phone: "555-987-6543",
      email: "jane.doe@example.com",
    },
    {
      id: 3,
      name: "Bob Johnson",
      age: 40,
      address: "789 Maple St, Anytown USA",
      phone: "555-555-5555",
      email: "bob.johnson@example.com",
    },
  ]);

  const [showCards, setShowCards] = useState(true);

  const showCardHandler = (card) => {
    setShowCards(card);
  };

  return (
    <div className="App">
      <Header />
      <NavigationBtns showCardHandler={showCardHandler} />
      <CardList showCards={showCards} names={nameList} />
    </div>
  );
}

export default App;
