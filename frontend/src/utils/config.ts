const API_URL = import.meta.env.VITE_BASE_URL;

export const API_ROUTES = {
  users: `${API_URL}/users`,
  skills: `${API_URL}/skills`,
  states: `${API_URL}/states`,
  genders: `${API_URL}/genders`,
  languages: `${API_URL}/languages`,
};
