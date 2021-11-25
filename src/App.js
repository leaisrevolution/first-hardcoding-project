import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home.js";
import Guide from "./pages/Guide.js";
import Test1 from './pages/Test1';
import Test2 from './pages/Test2';
import Test3 from './pages/Test3';
import Test4 from './pages/Test4';
import Test5 from './pages/Test5';
import Test6 from './pages/Test6';
import Completed from './pages/Completed';
import Result from './pages/Result';






function App() {

    return (

        <div className="App">
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route exact path="/guide" component={Guide} />
                <Route path='/test1'><Test1></Test1> </Route>
                <Route path='/test2'><Test2></Test2> </Route>
                <Route path='/test3'><Test3></Test3> </Route>
                <Route path='/test4'><Test4></Test4> </Route>
                <Route path='/test5'><Test5></Test5> </Route>
                <Route path='/test6'><Test6></Test6> </Route>
                <Route exact path="/completed" component={Completed} />
                <Route exact path="/result" component={Result} />
            </BrowserRouter>
        </div>
    );
}




export default App;
