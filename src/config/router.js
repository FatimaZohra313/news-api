import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Data from "./data";
import Home from "./home";
import Item from "./item";

export default function AppRouter() {
  return (
    <Router>

        {/* <Link to="/" className="btn btn-secondary">Home</Link> */}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="data" element={<Data/>}/>
            <Route path="item" element={<Item/>}/>
        </Routes>
    </Router>
  )


}