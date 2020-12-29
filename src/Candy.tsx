import { Link } from 'react-router-dom';

function Candy() {
  return (
    <div>
      <h1>Here is candy</h1>
      <h2><Link to='/'>Go back</Link></h2>
    </div>
  )
}

export default Candy;