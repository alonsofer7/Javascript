import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to='/'>Home</Link> | 
            <Link to='/festivals'>Festivals</Link>
        </div>
    );
};

export default Navbar;