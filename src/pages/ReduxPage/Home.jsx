import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/redux/todos">Todos</Link>
        </li>
        <li>
          <Link to="/redux/users">Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
