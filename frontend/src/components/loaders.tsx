import React from 'react';
import GridView from "../layouts/grid-view";
import {Box, Grid, Skeleton} from "@mui/material";


export function CardLoader() {
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Box sx={{width: "100%",borderRadius:"10px"}}>
                <Skeleton variant="rectangular" sx={{
                    width: "100%",
                    height: "170px"
                }}/>
                <Skeleton/>
                <Skeleton width="60%"/>
            </Box>
        </Grid>
    )
}

export function GridLoader() {
    return (
        <GridView>
            {new Array(9).fill("skeleton").map((sk, index) => <CardLoader key={`skeleton-${index}`}/>)}
        </GridView>
    );
}
