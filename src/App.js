import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home.js";
import Guide from "./pages/Guide.js";
import Test from "./pages/Test.js";
import Test2 from "./pages/Test2.js";





function App() {

    return (

        <div className="App">
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route exact path="/guide" component={Guide} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/test2" component={Test2} />
            </BrowserRouter>
        </div>
    );
}




export default App;
