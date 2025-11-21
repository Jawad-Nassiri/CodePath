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
      location.href = "http://127.0.0.1:5500/index.html";
    }
  };

  overlay.onclick = (e) => {
    if (e.target === overlay) overlay.style.display = "none";
  };
}

const setToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

const getFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

const getToken = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user).token : null;
}



export { showModal, setToLocalStorage, getFromLocalStorage, getToken };
