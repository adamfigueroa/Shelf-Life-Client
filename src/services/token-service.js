import config from "../config";

const TokenService = {
  fetchAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },

  hasAuthToken() {
    return !!TokenService.fetchAuthToken();
  },

  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },

  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY);
  },
};

export default TokenService;
