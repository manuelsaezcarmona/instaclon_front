import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GoDiffAdded } from 'react-icons/go';
import { AiTwotoneHome } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { user } from '../../services/sampledata';

export function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2 className="navbar__logotext">
          <Link className="linkpage logo" to="/">
            PhotoClon
          </Link>
        </h2>{' '}
      </div>
      <div className="navbar__options">
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink className="navbar__link linkpage" to="/">
              <AiTwotoneHome />
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__link linkpage" to="/">
              <GoDiffAdded />
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__link linkpage" to="/user">
              {user.avatarURL ? (
                <img
                  className="navbar__avatar avatar"
                  src={user.avatarURL}
                  alt={user.fullname}
                />
              ) : (
                <FaUserCircle />
              )}
            </NavLink>
          </li>
          {/** TODO si da tiempo pagina explore con grid de imagenes de posts */}
        </ul>
      </div>
    </nav>
  );
}
