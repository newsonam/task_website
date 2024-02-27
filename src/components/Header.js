import { Link } from 'react-router-dom';
import './style.scss';

function Header() {
  return (
    <div className="header">
      <input className="header-search" type="search" />
      <div className='links'>
        <Link to="/categories" className='link'>Categories</Link>
        <Link to="/web" className='link'>Website Builders</Link>
        <Link to="/today" className='link'>Today's Deals</Link>
      </div>
    </div>
  );
}

export default Header;
