import React from "react";
import { Route, Redirect } from "react-router-dom";

const checkAuth = () => {
    const token = localStorage.getItem("token");
    if (token != null) return true;
    else return false;
};

function PrivateRoute({ comp: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) =>
                checkAuth() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
