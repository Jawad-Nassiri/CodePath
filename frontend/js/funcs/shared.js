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


export { showUsernameInNavbar };
