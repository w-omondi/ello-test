import React from 'react';
import {createTheme, ThemeProvider} from "@mui/material";

interface ITheme {
    children: React.ReactNode
}

export function ThemeContext(props: ITheme) {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#5ACCCC',
            },
            secondary: {
                main: '#CFFAFA',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    );
}
