import { Link } from 'react-router-dom';

import './feature.scss';

function Main() {
    const options = ['Tools', 'AWS Builder', 'Start Build', 'Build Supplies', 'Tooling', 'BlueHosting'];
    return (
        <div className="option-container">

                {options.map((item) => (
                    <Link to="/" className='link'>{item}</Link>
                ))}
        </div>
    );
}

export default Main;
