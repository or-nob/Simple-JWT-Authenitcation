import React, { useEffect, useState } from "react";
import { getDataWithPOSTAndNoBody } from "./Constants/helper";
import { useHistory } from "react-router-dom";

const FProtectedComp = () => {
    const history = useHistory();
    const [msg, SetMsg] = useState("");
    useEffect(() => {
        (async () => {
            const msg = await getDataWithPOSTAndNoBody(
                "http://localhost:4000/"
            );
            SetMsg(msg);
        })();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        history.push("/");
    };
    return (
        <>
            <h1>{msg.message}</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
};

export default FProtectedComp;
