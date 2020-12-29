import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div>
      <h1>Vending Machine</h1>
      <ul>
        <li>
          <Link to="/soda">Soda</Link>
        </li>
        <li>
          <Link to="/candy">Candy</Link>
        </li>
        <li>
          <Link to="/chips">Chips</Link>
        </li>
      </ul>
    </div>
  );
}

export default VendingMachine;
