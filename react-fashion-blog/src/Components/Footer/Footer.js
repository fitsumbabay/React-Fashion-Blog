import React from "react";
import "./Footer.css";


function Footer() {
    return (
      <footer>
        <nav
          aria-label="Footer Navigation"
          role="navigation"
          className="continuesFooter"
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
            <li>
              <a href="https://perscholas.org/">Tips</a>
            </li>
          </ul>
        </nav>
        <p class="copyright">&copy; 2013 Valet Industries,Inc</p>
      </footer>
    );
}

export default Footer;