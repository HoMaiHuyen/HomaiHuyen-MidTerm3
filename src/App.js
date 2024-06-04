import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import User from "./components/users/User";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";


const App = () => {
    return (
        <div className="App">
            <Router>
            <Navbar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Search} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/user/:id" component={User} />
                        <Route exact path="/*" component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};
export default App;