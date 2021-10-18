import * as usersAPI from "./users-api";

export const signUp = async (userData) => {
  try {
    console.log("hit signup");
    const token = await usersAPI.signUp(userData);
    localStorage.setItem("token", token);
    return getUser();
  } catch {
    throw new Error("Invalid Sign Up");
  }
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  const payload = JSON.parse(atob(token.split(".")[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem("token");
    return null;
  }
  return token;
};

export const getUser = () => {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
};

export const logOut = () => {
  localStorage.removeItem("token");
};

export const login = async (credentials) => {
  try {
    const token = await usersAPI.login(credentials);
    localStorage.setItem("token", token);
    return getUser();
  } catch {
    throw new Error("Invalid Login");
  }
};

export function checkToken() {
  return usersAPI.checkToken().then((dateStr) => new Date(dateStr));
}
