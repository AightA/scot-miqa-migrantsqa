export const getAnswers = () => {
  return fetch("/api/answers").then(res => res.json());
};

export const getUsers = () => {
  return fetch("/api/users").then(res => res.json());
};

export const postAnswer = (content, tags, score) => {
  const token = localStorage.getItem("token");
  const postedData = {
    method: "POST",
    body: JSON.stringify({
      content,
      tags,
      score
    }),

    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  };
  return fetch("/api/questions", postedData);
};

export const update = () => {
  return fetch("/api/answers").then(res => res.json());
};
