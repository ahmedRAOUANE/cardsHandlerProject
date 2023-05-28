import Card from "../card/Crad";

const CardList = ({names, showCards}) => {
  return (
    <div className="row container m-auto justify-content-center">
      {names.map((name) =>
        showCards ? <Card member={name} key={name.id} /> : null
      )}
    </div>
  );
};

export default CardList;
