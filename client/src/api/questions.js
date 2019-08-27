export const getQuestions = () => {
  return fetch("/api/questions").then(res => res.json());
};

export const getUsers = () => {
  return fetch("/api/users").then(res => res.json());
};
