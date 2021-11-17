import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home.js";
import Guide from "./pages/Guide.js";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route exact path="/guide" component={Guide} />
            </BrowserRouter>
        </div>
    );
}

export default App;



// function App() {

//     return (
//         <div className ="App">
//             <BrowserRouter>
//                 <Route exact path="/" component={home} />
//                 <Route exact path="/test" componet={test} />
//             </BrowserRouter>
//         </div>
//     );
// }

// export default App;

