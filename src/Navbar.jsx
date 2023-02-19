import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Carsomania </h1>
            <div className="links">
                <Link to="/home">Home</Link>
                <a href='/'>LogOut</a>
            </div>
        </nav>
    )
}

export default Navbar