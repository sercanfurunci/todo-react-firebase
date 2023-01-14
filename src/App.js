import React from "react";
import Home from "./Home";
import {Route, Routes} from "react-router-dom";
import Login from "./Login";


function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path={"signup"}/>
            </Routes>
        </div>
    );
}

export default App;
