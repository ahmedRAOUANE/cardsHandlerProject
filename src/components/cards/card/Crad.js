import style from "./Card.module.css";
const Card = (member) => {
  return (
    <div className="col col-md-4" id={member.member.id}>
      <div className="card m-2 p-3 shadow">
        <div className={`${style.controlBtns} d-flex justify-content-end`}>
          <button className="btn btn-outline-success me-2 rounded-circle">
            X
          </button>
          <button className="btn btn-outline-danger me-2 rounded-circle">
            X
          </button>
        </div>
        <h5 className="card-title">{member.member.name}</h5>
        <ul className="card-body my-3 p-2 list-unstyled">
          <li className="card-text">age: {member.member.age}</li>
          <li className="card-text">address: {member.member.address}</li>
          <li className="card-text">number: {member.member.number}</li>
          <li className="card-text">email: {member.member.email}</li>
        </ul>
        <a href="/" className="btn btn-primary">
          go some where
        </a>
      </div>
    </div>
  );
};

export default Card;
