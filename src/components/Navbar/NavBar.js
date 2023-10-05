import logo from '../Navbar/assets/logo.jpg';
import './NavBar.css';
import Cartwidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';


const routes = [
  {
    path: '/inicio',
    text: 'Inicio'
  },
  {
    path: '/productos',
    text: 'Productos'
  },
  {
    path: '/category/remeras',
    text: 'Remeras'
  },
  {
    path: '/category/buzos',
    text: 'Buzos'
  },
  {
    path: '/category/pantalones',
    text: 'Pantalones'
  },
];

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container justify-content-between">
          <Link to='/' className="navbar-brand">
            <img src={logo} alt="Logo" width="150" />
          </Link>
          <div className="d-flex align-items-center">
            <ul className="navbar-nav">
              {routes.map((route) => (
                <li className="nav-item" key={route.path}>
                  <NavLink
                    to={route.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    {route.text}
                  </NavLink>
                </li>
              ))}
            </ul>
            <NavLink to='/cart'><Cartwidget /></NavLink>
          </div>
        </div>
      </nav>

    </header>
  );
};

export default NavBar;
