import { showModal, setCookie } from "./utils.js";

const register = async () => {
  const $ = document;
  const fullnameInput = $.querySelector("#fullname");
  const usernameInput = $.querySelector("#username");
  const emailInput = $.querySelector("#email");
  const phoneInput = $.querySelector("#phone");
  const passwordInput = $.querySelector("#password");

  if (
    !fullnameInput.value.trim() ||
    !usernameInput.value.trim() ||
    !emailInput.value.trim() ||
    !phoneInput.value.trim() ||
    !passwordInput.value.trim()
  ) {
    showModal(0);
    return;
  }

  const userInfo = {
    name: fullnameInput.value.trim(),
    username: usernameInput.value.trim(),
    email: emailInput.value.trim(),
    phone: phoneInput.value.trim(),
    password: passwordInput.value.trim(),
    confirmPassword: passwordInput.value.trim(),
  };

  try {
    const res = await fetch("http://localhost:4000/v1/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    });

    if (res.ok) {
      showModal(201);
      fullnameInput.value = "";
      usernameInput.value = "";
      emailInput.value = "";
      phoneInput.value = "";
      passwordInput.value = "";
    } else if (res.status === 409) {
      showModal(409);
    } else {
      showModal(0);
    }

    const data = await res.json();

    // store user token in cookies 
    setCookie('user', { token: data.accessToken }, 7);


  } catch (error) {
    console.error("Network or server error:", error);
    showModal(0);
  }
};

export { register };
