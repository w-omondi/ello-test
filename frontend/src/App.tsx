import React from 'react';
import './App.css';
import {Container} from "@mui/material";
import Home from "./pages/home";
import {Route, Routes} from "react-router-dom";
import ReadingList from "./pages/reading-list";

function App() {
    return (
        <Container>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={"/reading-list"} element={<ReadingList/>}/>
            </Routes>
        </Container>
    );
}

export default App;
