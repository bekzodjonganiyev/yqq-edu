export const fetchApi = async (url, data) => {
  const res = await fetch(`https://new-tkti-back.herokuapp.com/${url}`, data);
  return await res.json();
};
