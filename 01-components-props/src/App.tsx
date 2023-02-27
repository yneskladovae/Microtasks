import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Body} from "./components/Body";
import {Footer} from "./components/Footer";

export const App = () => {
    return (
        <div className="App">
            <Header title={"New header"} />
            <Body title={"New body"} />
            <Footer title={"New footer"} />
        </div>
    );
}
