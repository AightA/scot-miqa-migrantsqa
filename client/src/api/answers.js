export const getAnswers = () => {
  return fetch("/api/answers").then(res => res.json());
};

export const getUsers = () => {
  return fetch("/api/users").then(res => res.json());
};
