import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-950 text-white p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            src="/images/AP-Celulares.png"
            alt="Logo AP Celulares"
            className="h-10 rounded-lg"
          />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {/* <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li> */}
            {/* <li>
              <Link to="/products" className="hover:underline">Produtos</Link>
            </li> */}
            <li>
              <a
                href="https://wa.me/553131288805"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Fale conosco
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

