const showModal = (statusCode) => {
  const overlay = document.querySelector(".modal-overlay");
  const modal = document.querySelector(".modal");
  const iconEl = modal.querySelector(".icon i");
  const iconWrapper = modal.querySelector(".icon");
  const titleEl = modal.querySelector("h2");
  const messageEl = modal.querySelector("p");
  const btn = modal.querySelector(".modal-btn");

  const statusMap = {
    201: {
      icon: "fa-solid fa-check",
      color: "var(--primary-color)",
      title: "Success!",
      message: "Your action was successful.",
    },
    409: {
      icon: "fa-solid fa-times",
      color: "#FF4B5C",
      title: "Error!",
      message: "Oops! This username or email already exists.",
    },
  };

  const status = statusMap[statusCode] || {
    icon: "fa-solid fa-info",
    color: "var(--primary-color)",
    title: "Notice",
    message: "Invalid data. Please check your input.",
  };

  iconEl.className = status.icon;
  iconWrapper.style.background = status.color;
  titleEl.textContent = status.title;
  messageEl.textContent = status.message;
  btn.style.background = status.color;

  overlay.style.display = "flex";

  btn.onclick = () => {
    overlay.style.display = "none";
    if (statusCode === 201) {
      location.href = "http://127.0.0.1:5500/frontend/index.html";
    }
  };

  overlay.onclick = (e) => {
    if (e.target === overlay) overlay.style.display = "none";
    if (statusCode === 201) {
      location.href = "http://127.0.0.1:5500/frontend/index.html";
    }
  };
};

const setCookie = (key, value, days = 7) => {
  const expires = new Date(Date.now() + days * 86400000).toUTCString();
  document.cookie = `${key}=${encodeURIComponent(
    JSON.stringify(value)
  )}; expires=${expires}; path=/; Secure; SameSite=Strict`;
};

const getCookie = (key) => {
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((c) => c.startsWith(key + "="));
  return cookie ? JSON.parse(decodeURIComponent(cookie.split("=")[1])) : null;
};

const removeCookie = (key) => {
  setCookie(key, "", -1);
};

const getToken = () => {
  const user = getCookie("user");
  return user ? user.token : null;
};

const isLogin = () => !!getToken();


export { showModal, setCookie, getCookie, removeCookie, getToken, isLogin };
