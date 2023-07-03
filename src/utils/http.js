export const fetchApi = async (url, data) => {
  try {
    const res = await fetch(`https://dolphin-app-ka7ge.ondigitalocean.app/${url}`, data);
    return res.ok ? res.json() : res;
  } catch ({ message }) {
    return message;
  }
};
