import React from 'react';
import {Box} from "@mui/material";

const Logo = () => {
    return (
        <Box sx={{
            width: {
                xs: "30px",
                md: "50px",
            }
        }}>
            <img src={"./logo512.svg"} style={{width: "100%"}} alt={"logo"} loading={"lazy"}/>
        </Box>
    );
};

export default Logo;