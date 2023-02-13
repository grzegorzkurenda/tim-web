import { Link } from 'react-router-dom';

const Navbar = () =>{
    return (
        <nav className="navbar">
            <h1>Carsomania </h1>
            <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/favorite">Fav</Link>
                <Link to="/">LogOut</Link>
            </div>
        </nav>
    )
}

export default Navbar