import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className='navbar'>
        <nav className="menu-bar">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <Link to="/contact" className="menu-link">Contact</Link>
        </nav>
      </div>
    </>
  );
}

export default Nav;