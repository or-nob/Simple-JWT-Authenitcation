import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { getDataWithPOST } from "./Constants/helper";

const LoginComp = () => {
    let location = useLocation();
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        (async () => {
            if (localStorage.getItem("token")) {
                history.push("/welcome");
            }
        })();
    }, [location, history]);

    const routeChange = async (event) => {
        event.preventDefault();
        try {
            const params = {
                email: email,
                password: password,
            };
            const result = await getDataWithPOST(
                "http://localhost:4000/loginAPI/",
                params,
                "json",
                false
            );
            if (result.validation === "valid") {
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("token", result.token);
                if (location.state == null) history.push("/protected1");
                else history.push(location.state.from.pathname);
            } else {
                console.log(location.state);
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <form>
                <label>Email</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={routeChange}>Login</button>
            </form>
        </>
    );
};

export default LoginComp;
