/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const NavBar = () => (
  <nav className="navbar navbar-dark bg-primary">
    <div className="container">
      <a href="" className="navbar-brand">
        <img src={logo} alt="react-logo" style={{ width: '4rem' }} />
        Learning TypeScript
      </a>
      <ul>
        <li><Link to="/tasks" style={{ textDecoration: 'none', color: '#FFF' }}>Tasks List</Link></li>
        <li>Bank</li>
        <li>API Rick and Morty</li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
