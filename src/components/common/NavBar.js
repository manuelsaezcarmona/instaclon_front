import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GoDiffAdded } from 'react-icons/go';
import { AiTwotoneHome } from 'react-icons/ai';
import { user } from '../../services/sampledata';
import Avatar from '../avatar/Avatar';

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
            <NavLink className="navbar__link linkpage" to="/post">
              <GoDiffAdded />
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__link linkpage" to="/user">
              <Avatar user={user} size="small" />
            </NavLink>
          </li>
          {/** TODO si da tiempo pagina explore con grid de imagenes de posts */}
        </ul>
      </div>
    </nav>
  );
}
