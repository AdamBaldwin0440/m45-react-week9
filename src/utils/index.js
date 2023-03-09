export const addUser = async (username, email, password) => {
    try {

        const response = await fetch("http://localhost:5001/users/register", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        });
        const data = await response.json();
        console.log("data:", data);
    } catch (error) {
        console.log(error)
    }
}

export const loginUser = async (username, password, setUser) => {
    try {
        const  response = await fetch("http://localhost:5001/users/login", {
            method: "POST",
            mode: "cors",
            headers: {
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
        }})

            const data = await response.json();
            console.log(data);

            setUser(data.user);
    } catch (error) {
        console.log(error);
    }
};