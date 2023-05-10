export const fetchApi = async (url, data) => {
  try {
    const res = await fetch(`https://new-tkti-back.herokuapp.com/${url}`, data);
    return res.ok ? res.json() : res;
  } catch ({ message }) {
    return message;
  }
};
