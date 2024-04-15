import NavLink from "./Navlink";
import navLinks from "../Utilities/navLinks";

import MenuIcon from '@mui/icons-material/Menu';
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

// state variable for open or closed navbar bar icon, when clicked switch boolen.. onclick links also reset variable to original state, true or false to close menu.

function Navbar() {
    return (
        <>
            <Box className='fixed w-full ' sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <Accordion >
                                <AccordionSummary>
                                    <Typography>
                                        <MenuIcon />
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails >
                                    <Typography >
                                        <ul className="font-poppins">
                                            {navLinks.map((link, index) => (
                                                <li key={index}>
                                                    <NavLink href={link.href} title={link.title} />
                                                </li>
                                            ))
                                            }
                                        </ul>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </IconButton>
                        <Typography sx={{ flexGrow: 1 }}>
                            <a href="/" className="font-exo mx-auto" >
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