import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginComp from "./LoginComp";
import FProtectedComp from "./FProtectedComp";
import SProtectedComp from "./SProtectedComp";
import PrivateRoute from "./PrivateRoute";

function App() {
    const PrivateComp = () => {
        return (
            <Switch>
                <PrivateRoute path="/protected1" comp={FProtectedComp} exact />
                <PrivateRoute path="/protected2" comp={SProtectedComp} exact />
                <PrivateRoute path="/welcome" comp={SProtectedComp} exact />
            </Switch>
        );
    };

    const PublicComp = () => {
        return <Route from="/" component={LoginComp} exact />;
    };

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={PublicComp} />
                <Route exact component={PrivateComp} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
