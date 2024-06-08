import React, {useState} from 'react';
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./logo";
import {Link} from "react-router-dom"

function Menu() {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => setOpen(value => !value)
    return (
        <>
            <Box sx={{
                display: "flex", flexDirection: "flex-row", alignItems: "center", gap: "20px"
            }}>
                <IconButton onClick={toggleDrawer}>
                    <MenuIcon/>
                </IconButton>
                <Logo/>
            </Box>

            <Drawer open={open} onClose={toggleDrawer} sx={{}}>
                <Box sx={{
                    width: {
                        xs: "300px",
                        md: "400px",
                    }
                }} role="presentation" onClick={toggleDrawer}>
                    <Box sx={{width: "100%", padding: "20px"}}>
                        <Logo/>
                        <Divider/>
                    </Box>
                    <List>
                        {/*I can use array.map() to render al links but now its only two links */}
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to={"/"}>
                                <ListItemIcon>
                                    <HomeIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Home"}/>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component={Link} to={"/reading-list"}>
                                <ListItemIcon>
                                    <LibraryBooksIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Reading List"}/>
                            </ListItemButton>
                        </ListItem>

                    </List>
                </Box>
            </Drawer>
        </>
    );
}

export default Menu;