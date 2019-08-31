export const updatePassword = (password, email) => {
  const updateData = {
    method: "PUT",
    body: JSON.stringify({ password, email }),
    headers: { "Content-Type": "application/json" }
  };
  return fetch("/auth/change-password", updateData);
  // .then(response => console.log(response.status))
  // .catch(err => console.error(err));
};
