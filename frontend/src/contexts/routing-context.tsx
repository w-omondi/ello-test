import React from 'react';
import {BrowserRouter} from "react-router-dom";

interface IRoutingContextProps {
    children: React.ReactNode
}

export default function RoutingContext(props: IRoutingContextProps) {
    return (
        <BrowserRouter>
            {props.children}
        </BrowserRouter>
    );
}