import React from 'react';
import './Nav.css';

function Nav() {
    return (
      <>
        <nav
          aria-label="Main Navigation"
          role="navigation"
          className="continues"
        >
          <ul>
            <li>
              <a href="https://perscholas.org/">Women's</a>
            </li>
            <li>
              <a href="https://perscholas.org/">Men's</a>
            </li>
            <li>
              <a href="https://perscholas.org/">On the Street</a>
            </li>
            <li>
              <a href="https://perscholas.org/">The Catwalk</a>
            </li>
            <li>
              <a href="https://perscholas.org/">AdWatch</a>
            </li>
            <li>
              <a href="https://perscholas.org/">About</a>
            </li>
          </ul>
        </nav>
      </>
    );
}

export default Nav;