import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home.js";
import Guide from "./pages/Guide.js";
import Test from "./pages/Test.js";
import Contents from "./pages/Contents.js";



function App() {
    return (


        <div className="App">
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route exact path="/guide" component={Guide} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/contents" component={Contents} />
            </BrowserRouter>

        </div>
    );
}



export default App;


