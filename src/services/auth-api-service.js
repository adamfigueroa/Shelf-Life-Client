import config from "../config";

const AuthApiService = {
  postLogin(loginCredentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginCredentials),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((event) => Promise.reject(event));
        } else {
          return res.json();
        }
      })
      .catch(() => alert("Login has encountered an error"));
  },

  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((event) => Promise.reject(event));
      } else {
        return res.json();
      }
    });
  },
};

export default AuthApiService;
