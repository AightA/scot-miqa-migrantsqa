export const getQuestions = () => {
  return fetch("/api/questions").then(res => res.json());
};

export const getUsers = () => {
  return fetch("/api/users").then(res => res.json());
};

export const postQuestion = (
  content,
  datePosted,
  tags,
  isAnswered,
  score,
  userId
) => {
  const token = localStorage.getItem("token");
  const postedData = {
    method: "POST",
    body: JSON.stringify({
      content,
      datePosted,
      tags,
      isAnswered,
      score,
      userId
    }),

    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  };
  return fetch("/api/questions", postedData);
};
