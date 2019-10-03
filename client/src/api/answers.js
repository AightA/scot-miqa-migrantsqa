export const getAnswers = () => {
  return fetch("/api/answers").then(res => res.json());
};

export const getUsers = () => {
  return fetch("/api/users").then(res => res.json());
};

export const update = () => {
  return fetch("/api/answers").then(res => res.json());
};

export const getAnswersByQuestionId = id => {
  return fetch(`/api/answers/${id}`).then(res => res.json());
};
