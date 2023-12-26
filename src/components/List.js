import { Link } from "react-router-dom";

function ListKey() {
  const players = ["Virat Kohli", "Chrish gayle", "Rohit Sharma"];
  return (
    <>
      {/* <Link to="/">gender</Link> */}
      {players.map((player, index) => (
        <Players player={player} key={index} />
      ))}
    </>
  );
}

function Players({ player }) {
  return (
    <div>
      My favorite sport player is <b>{player}</b>.
    </div>
  );    
}

export default ListKey;
