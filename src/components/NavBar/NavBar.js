import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { GoDiffAdded } from 'react-icons/go';
import { AiTwotoneHome } from 'react-icons/ai';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import Avatar from '../Avatar/Avatar';
import { startLogout } from '../../redux/actions/user';

export function NavBar() {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };

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
          <li className="navbar__item navbar__link">
            <RiLogoutBoxRFill onClick={handleLogout} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
