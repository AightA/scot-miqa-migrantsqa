export const updatePassword = (oldPassword, newPassword, email) => {
  const accessString = localStorage.getItem("token");
  if (accessString === null) {
    console.log("Couldn't get our authorisation token from local storage");
  }
  const updateData = {
    method: "PUT",
    body: JSON.stringify({ oldPassword, newPassword, email }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessString}`
    }
  };
  return fetch("/auth/change-password", updateData).then(res => {
    if (res.status >= 200 && res.status < 300) {
      return res.json();
    } else {
      throw res;
    }
  });
};
