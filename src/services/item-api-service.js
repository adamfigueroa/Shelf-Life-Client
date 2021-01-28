import config from "../config";
import TokenService from "./token-service";

const ItemApiService = {
  fetchUserItems() {
    console.log(TokenService.fetchAuthToken())
    return fetch(`${config.API_ENDPOINT}/items`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.fetchAuthToken()}`,
        
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        } else {
          return res.json();
        }
      })
      .catch(() => alert("Item fetch has encountered an error"));
  },

  fetchItemById(id) {
    return fetch(`${config.API_ENDPOINT}/items/${id}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.fetchAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        } else {
          return res.json();
        }
      })
      .catch(() => alert("Item fetch has encountered an error"));
  },

  addItem(item) {
    return fetch(`${config.API_ENDPOINT}/items`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.fetchAuthToken()}`,
      },
      body: JSON.stringify(item),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        } else {
          return res.json();
        }
      })
      .catch(() => alert("Add item has encountered an error"));
  },

  deleteItem(id) {
    return fetch(`${config.API_ENDPOINT}/items/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.fetchAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }
      })
      .catch((error) => alert(error.message));
  },

  editItem(item, id) {
    return fetch(`${config.API_ENDPOINT}/items/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.fetchAuthToken()}`,
      },
      body: JSON.stringify(item),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        } else {
          return res.ok;
        }
      })
      .catch((error) => alert(error.message));
  },
};

export default ItemApiService;
