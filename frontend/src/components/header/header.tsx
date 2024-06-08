import React from 'react';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./header.css"
import {Box, IconButton} from "@mui/material";
import SearchBar from "../search-bar/search-bar";
import Menu from "../menu";
import SearchIcon from "@mui/icons-material/Search";


function Header() {

    return (
        <div className={"header"}>
            <Menu/>
            <SearchBar/>
            <Box>
                <IconButton className={"search-icon"}>
                    <SearchIcon/>
                </IconButton>
                <IconButton className={"account-icon"}>
                    <AccountCircleIcon/>
                </IconButton>
            </Box>
        </div>
    );
}

export default Header;