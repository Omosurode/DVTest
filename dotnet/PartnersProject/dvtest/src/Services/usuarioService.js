import axios from "axios";

const endpoint = `http://localhost:8080/api/UserApi`;

const loginUser = (payload) => {
    const config = {
        method: "POST",
        url: endpoint,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };
    return axios(config)
        .then((response) => {
            return response.data;
        }).catch((err) => {
            alert("Login fields are required " + err);
        });
};

const userService = { loginUser };

export default userService;