import { useState } from "react";
import NavLink from "./Navlink";
import navLinks from "../Utilities/navLinks";

import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const closeNav = () => {
        setNavbarOpen(false)
    }


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar>
                    <Toolbar className="bg-gradient-to-br from-[#c79141] to-[#854426] ">
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 3 }}
                        >
                            <div className="mobile-menu block md:hidden ">
                                {!navbarOpen
                                    ? (<button onClick={() => setNavbarOpen(!navbarOpen)} className="flex items-center px-3 py-2 border rounded border-slate-200  hover:border-white"><MenuIcon className="h-5 w-5" /></button>)
                                    : (<button onClick={() => setNavbarOpen(!navbarOpen)} className="flex items-center px-3 py-2 border rounded border-slate-200  hover:border-white"><MenuOpenIcon className="h-5 w-5" /></button>)
                                }
                            </div>
                            <div>
                                <ul className="font-poppins hidden md:flex md:flex-row md:text-lg xl:text-2xl " >
                                    {navLinks.map((link, index) => (
                                        <li key={index}>
                                            <NavLink href={link.href} title={link.title} />
                                        </li>
                                    ))
                                    }
                                </ul>
                            </div>
                        </IconButton>
                        <Typography sx={{ flexGrow: 1 }}>
                            <a href="/" className="hidden md:block w-[85%] text-center font-exo md:text-3xl lg:text-4xl xl:text-5xl justify-center " >
                                Higgins Excavation
                            </a>
                            <a href="/" className="font-exo flex text-2xl md:hidden justify-center" >
                                H. Excavation
                            </a>
                        </Typography>
                        <Button href="#contact" onClick={() => closeNav()}  color="inherit" ><h1 className="lg:text-2xl md:text-xl text-md italic font-poppins font-light">Contact us</h1></Button>
                    </Toolbar>
                </AppBar>
                {navbarOpen ? <ul className="flex flex-col py-48 h-full bg-slate-600 text-4xl gap-8 font-poppins mix-blend-overlay fixed w-full rounded-lg items-center">
                    {navLinks.map((link, index) => (
                        <li onClick={() => closeNav()}  key={index}>
                            <NavLink href={link.href} title={link.title} />
                            <Divider variant="center" />
                        </li>
                    ))
                    }
                </ul> : null}
            </Box>
        </>
    );
}

export default Navbar;