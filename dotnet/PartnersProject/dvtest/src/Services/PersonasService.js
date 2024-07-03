import axios from "axios";

const endpoint = `http://localhost:8080/api/PersonasApi`;

const addPersona = (payload) => {
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
            return Promise.reject(err);
        });
};

const getPersonas = () => {
    const config = {
        method: "GET",
        url: endpoint,
        crossdomain: true,
        headers: { "Content-Type": "application/json" },
    };
    return axios(config)
        .then((response) => {
            return response.data;
        }).catch((err) => {
            return Promise.reject(err);
        });
};

const personasService = { addPersona, getPersonas };

export default personasService;