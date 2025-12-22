import { isLogin } from "./utils.js";
import { getMe } from "./auth.js";

const showUsernameInNavbar = async () => {
  const navbarProfileBox = document.querySelector(".main-header__profile");
  let userInfos = null;
  if (isLogin()) {
    userInfos = await getMe();
  }

  navbarProfileBox.innerHTML = userInfos
    ? `<i class="fa-solid fa-user"></i>
       <span class="main-header__profile_text">${userInfos.name}</span>`
    : `<span class="main-header__profile_text">Log-In / Sign-In</span>`;
};

const showCoursesInTopBar = async () => {
  try {
    const topBarMenu = document.querySelector(".top-bar__menu");

    const res = await fetch("http://localhost:4000/v1/menus/topbar");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data = await res.json();

    if (data && data.length) {
      for (let i = 0; i < 6 && data.length; i++) {
        const randomNum = Math.floor(Math.random() * data.length);
        const course = data.splice(randomNum, 1)[0];

        topBarMenu.insertAdjacentHTML(
          "beforeend",
          `
            <li class="top-bar__item">
              <a href="${course.href}" class="top-bar__link">${course.title}</a>
            </li>
          `
        );
      }
    }
  } catch (error) {
    console.error("Failed to load top bar menu:", error);
  }
};

export { showUsernameInNavbar, showCoursesInTopBar };
