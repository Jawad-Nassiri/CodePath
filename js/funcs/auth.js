import { showModal } from "./modal.js";

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
    !passwordInputElem.value
  ) {
    alert("Please fill all required fields");
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
    showModal(201);
  } else if (response.status === 409) {
    showModal(409);
  } else {
    showModal();
  }

  fullnameInputElem.value = "";
  usernameInputElem.value = "";
  emailInputElem.value = "";
  phoneInputElem.value = "";
  passwordInputElem.value = "";
};

export { register };
