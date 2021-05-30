import axios from "axios";

// const API_URL = "https://backend-kide.herokuapp.com/api/";

class Auth {
    login(username, password) {
        return axios
            .post("https://backend-kide.herokuapp.com/api/signin", {
                    username,
                    password
                },
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("avatar");
    }

    register(username, password, role) {
        return axios.post("https://backend-kide.herokuapp.com/api/signup", {
            username,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

}

export default new Auth();