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

// state variable for open or closed navbar bar icon, when clicked switch boolen.. onclick links also reset variable to original state, true or false to close menu.
function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);


    return (
        <>
            <Box className='sticky top-0 ' sx={{ flexGrow: 1 }}>
                <AppBar className="">
                    <Toolbar className="bg-gradient-to-br from-[#c79141] to-[#854426]">
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <div className="">
                                {navbarOpen ? <ul className="font-poppins w-28 ml-3 pt-1 rounded fixed top-16 md:flex md:flex-row lg:w-60 gap-2 lg:top-0 lg:ml-10 lg:text-xl lg:px-5 lg:pb-5  ">
                                    {navLinks.map((link, index) => (
                                        <li key={index}>
                                            <NavLink  href={link.href} title={link.title} />
                                        </li>
                                    ))
                                    }
                                </ul> : null}
                                {!navbarOpen
                                    ? (<button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200  hover:border-white"><MenuIcon className="h-5 w-5" /></button>)
                                    : (<button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200  hover:border-white"><MenuOpenIcon className="h-5 w-5" /></button>)
                                }
                            </div>
                        </IconButton>
                        <Typography sx={{ flexGrow: 1 }}>
                            <a href="/" className="font-exo lg:text-5xl flex justify-center" >
                                Higgins Excavation
                            </a>
                        </Typography>
                        <Button href="#contact" color="inherit">Contact us</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default Navbar;