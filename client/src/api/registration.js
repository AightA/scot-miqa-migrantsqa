export const postUsers = (username, email, password) => {
  const postData = {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
    headers: { "Content-Type": "application/json" }
  };
  return fetch("/auth/register", postData);
};
