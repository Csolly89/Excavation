import NavLink from "./Navlink";
import navLinks from "../Utilities/navLinks";

function Navbar() {
    return (
        <>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="font-poppins flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
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