import React from 'react';
import {Grid} from "@mui/material";

interface IGridView {
    children: React.ReactNode
}

export default function GridView(props: IGridView) {
    return (
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
            {props.children}
        </Grid>
    );
}
