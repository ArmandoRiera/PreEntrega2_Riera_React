import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar({ title }) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="nav-link nav-title" to="/"> {title} </Link>
                <div className="navbar-nav">
                    <Link className="nav-link" to="/category/espada"> Espadas </Link>
                    <Link className="nav-link" to="/category/arco"> Arcos </Link>
                    <Link className="nav-link" to="/category/escudo"> Escudos </Link>
                </div>
                <CartWidget />
            </div>
        </nav>

    );
}

export default NavBar