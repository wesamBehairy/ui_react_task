import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {

    const nav = {
        color: "#fff",
    }

    return (
        <nav className="navbar" style={nav}>
            <div className="container">
                <span className="navbar-brand mb-0 h1">LOGO</span>

                <span className="navbar-brand mb-0 h1">
                    <FontAwesomeIcon icon="list" />
                </span>
            </div>
        </nav>
    )
}

export default Navbar;