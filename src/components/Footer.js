
import { Link } from 'react-router-dom';
import './style.scss';
function Footer() {
  const categories = ['Web Builder', 'Hosting', 'Data Center', 'Robotic-Animation'];
  const contact = ['Contact', 'Privacy Policy', 'Terms Of Service', 'Categories', 'About'];
  return (
    <div className="footer">
      <div className='categories'>
        <h4 className='heading'>CATEGORIES</h4>
        {categories.map((item,index) => (
          <Link to="/" key={index} className='link'>{item}</Link>
        ))}
      </div>
      <div className='contact-footer'>
        <h4 className='heading'>CONTACT</h4>
        {contact.map((item,index) => (
          <Link to="/" key={index} className='link'>{item}</Link>
        ))}
      </div>
      <div className='options-footer'>
        <select name="cars" className='state'>
          <option value="United States" className='opt'>United States</option>
          <option value="UK" className='opt'>UK</option>
        </select>
      </div>
    </div>
  );
}

export default Footer;
