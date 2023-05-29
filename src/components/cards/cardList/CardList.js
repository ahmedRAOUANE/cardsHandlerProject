import { useState } from "react";

// components
import Card from "../card/Crad";

const CardList = ({names, showCards}) => {
  const [nameList, setNameList] = useState(names);
  
  const handleNameList = (id) => {
    setNameList(nameList.filter(name => name.id !== id))
  }

  return (
    <div className="row container m-auto justify-content-center">
      {nameList.map((name) =>
        showCards && <Card member={name} key={name.id} handleNameList={handleNameList} />
      )}
    </div>
  );
};

export default CardList;
