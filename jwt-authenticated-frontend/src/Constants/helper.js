export async function getDataWithoutParams(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (err) {
        return err;
    }
}

export async function getDataWithPOST(
    url,
    params,
    resulttype = "json",
    isAuthenticationNeeded = true
) {
    try {
        const token = isAuthenticationNeeded
            ? localStorage.getItem("token")
            : "";
        console.log(token);
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
        if (isAuthenticationNeeded) headers.Authorization = `Bearer ${token}`;
        console.log(headers);
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(params),
        });
        if (resulttype === "json") {
            const result = await response.json();
            return result;
        } else if (resulttype === "text") {
            const result = await response.text();
            return result;
        } else throw new Error("result type not found");
    } catch (err) {
        return err;
    }
}

export async function getDataWithPOSTAndNoBody(url) {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
        });

        const result = await response.json();
        return result;
    } catch (err) {
        return err;
    }
}
