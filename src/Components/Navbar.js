import NavLink from "./Navlink";
import navLinks from "../Utilities/navLinks";
import icon from "../assets/Nav.png"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="" >
                <ul className="font-poppins flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0   ">
                    <Link to="/">
                        <img style={{height: "5vw", width: "11vw"}} src={icon} alt="small bulldozer icon" />
                    </Link>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    ))
                    }
                </ul>
            </div> 
        </>
    );
}

export default Navbar;