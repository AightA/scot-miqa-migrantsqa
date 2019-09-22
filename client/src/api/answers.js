export const getAnswers = () => {
  return fetch("/api/answers").then(res => res.json());
};

export const getUsers = () => {
  return fetch("/api/users").then(res => res.json());
};

export const updatedAnswers = () => {
  return fetch("/api/answers").then(res => res.json());
};

export const acceptAnswers = (isAccepted, id) => {
  console.log(isAccepted, id, "acceptAnswers");
  const token = localStorage.getItem("token");
  console.log(JSON.stringify({ isAccepted, id }));
  const updateData = {
    method: "POST",
    body: JSON.stringify({ isAccepted, id }),
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  };
  return fetch("/api/answers/accept-answer", updateData).then(res => {
    if (res.status >= 200 && res.status < 300) {
      return res.json();
    } else {
      throw res;
    }
  });
};
