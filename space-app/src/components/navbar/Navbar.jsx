
import AstroLogo from "/astronaut.svg.svg"
import "./Navbar.css"
import { Link } from 'react-router-dom'



function Navbar({ links }) {
    console.log(links);
    const navStyles = {
        backgroundColor: "rgba(36, 9, 98, .4)",
    };

    return(
        <nav className="nav-container" style={navStyles}>
            <img className="nav-logo" src={AstroLogo} alt="space-app logo" />
            <div className="links-container">
                {links.map((item) => (
                  <link key={item.id} to={item.href}>{item.text}</link>
                ))}
            </div>
        </nav>
    );

}

export default Navbar;