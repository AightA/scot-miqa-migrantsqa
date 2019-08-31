export const userLogin = (email, password) => {
  const postData = {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" }
  };
  return fetch("/auth/login", postData).then(res => {
    if (res.status >= 200 && res.status < 300) {
      return res.json();
    } else {
      throw res;
    }
  });
};
