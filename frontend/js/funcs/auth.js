// sign up (register) method
const register = async () => {
  const register = async () => {
  try {
    const fullnameInput = document.querySelector("#fullname");
    const usernameInput = document.querySelector("#username");
    const emailInput = document.querySelector("#email");
    const phoneInput = document.querySelector("#phone");
    const passwordInput = document.querySelector("#password");
    const confirmPasswordInput = document.querySelector("#confirmPassword");

    const newUser = {
      name: fullnameInput.value.trim(),
      username: usernameInput.value.trim(),
      email: emailInput.value.trim(),
      phone: phoneInput.value.trim(),
      password: passwordInput.value.trim(),
      confirmPassword: confirmPasswordInput.value.trim()
    };
    
    if (!newUser.name || !newUser.username || !newUser.email || !newUser.phone || !newUser.password)
    throw new Error("All fields are required");

    if (newUser.password !== newUser.confirmPassword)
    throw new Error("Passwords do not match");

    const res = await fetch("http://localhost:4000/v1/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    const data = await res.json();
    console.log(data);

  } catch (error) {
    console.error("Register error:", error.message);
  }
};

};


export {register}