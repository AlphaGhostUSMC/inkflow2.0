import { Link } from 'react-router-dom';
import logo from '../InkFlow Logo.svg';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul className="navigation">
          <li><a href="#">Technology</a></li>
          <li><a href="#">Food</a></li>
          <li><a href="#">Health</a></li>
          <li><a href="#">Finance</a></li>
          <li><a href="#">Arts</a></li>
        </ul>
      </nav>
      <div className="user-actions">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </header>
  );
}