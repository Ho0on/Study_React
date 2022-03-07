import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <h1>Main</h1>
      <ul>
        <li>
          <Link to="/redux">redux</Link>
        </li>
        <li>
          <Link to="/recoil">recoil</Link>
        </li>
      </ul>
    </div>
  );
};

export default Main;
