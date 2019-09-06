export const getQuestions = () => {
  return fetch("/api/questions").then(res => res.json());
};

export const getUsers = () => {
  return fetch("/api/users").then(res => res.json());
};

export const getUserById = id => {
  return fetch(`/api/users/${id}`).then(res => res.json());
};
