import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Books } from "./pages/Books";
import { About } from "./pages/About";
import { Thoughts } from "./pages/Thoughts";
import { Projects } from "./pages/Projects";

function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/books" element={<Books />}/>
            <Route exact path="/projects" element={<Projects />}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/thoughts" element={<Thoughts />}/>
        </Routes>
    )
}

export default Router;