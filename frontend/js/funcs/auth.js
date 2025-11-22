import { showModal, setToLocalStorage } from "./utils.js";

const register = async () => {
  const $ = document;
  const fullnameInputElem = $.querySelector("#fullname");
  const usernameInputElem = $.querySelector("#username");
  const emailInputElem = $.querySelector("#email");
  const phoneInputElem = $.querySelector("#phone");
  const passwordInputElem = $.querySelector("#password");

  if (
    !fullnameInputElem.value ||
    !usernameInputElem.value ||
    !emailInputElem.value ||
    !phoneInputElem.value ||
    !passwordInputElem.value
  ) {
    showModal();
    return;
  }

  let newUser = {
    name: fullnameInputElem.value.trim(),
    username: usernameInputElem.value.trim(),
    email: emailInputElem.value.trim(),
    phone: phoneInputElem.value.trim(),
    password: passwordInputElem.value.trim(),
    confirmPassword: passwordInputElem.value.trim(),
  };

  const response = await fetch("http://localhost:4000/v1/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });

  if (response.ok) {
    const data = await response.json();
    const userToken = data.accessToken;
    console.log('user saved', userToken)
    setToLocalStorage('user', { token: userToken})

    showModal(201);
    fullnameInputElem.value = "";
    usernameInputElem.value = "";
    emailInputElem.value = "";
    phoneInputElem.value = "";
    passwordInputElem.value = "";
  } else if (response.status === 409) {
    showModal(409);
  } else {
    showModal();
  }
};

export { register };
