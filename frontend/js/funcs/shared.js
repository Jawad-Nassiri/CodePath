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

let showAllCourses = false;
let coursesData = [];

const renderCourses = (showAll) => {
  const coursesContainer = document.querySelector(".courses-content");
  coursesContainer.innerHTML = ""; 

  coursesData.slice(0, showAll ? coursesData.length : 8).forEach((c) => {
    coursesContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="courses-box">
        <a href="#" class="courses-box__link">
          <img src="images/img-placeholder.jpg" alt="${
            c.name
          }" class="courses-box__img">
        </a>

        <div class="course_box__main">
          <a href="#" class="course-box__title">${c.name}</a>

          <div class="course-box__rating-teacher">
            <div class="course-box__teacher">
              <i class="fa-solid fa-chalkboard-user course-box__teacher-icon"></i>
              <a href="#" class="course-box__teacher-link">${c.creator}</a>
            </div>

            <div class="course-box__rating">
              <i class="fa-solid fa-star course-box__star"></i>
              <i class="fa-solid fa-star course-box__star"></i>
              <i class="fa-solid fa-star course-box__star"></i>
              <i class="fa-solid fa-star course-box__star"></i>
              <i class="fa-regular fa-star course-box__empty-star"></i>
            </div>
          </div>

          <div class="course-box__status">
            <div class="course-box__users-icon">
              <i class="fa-solid fa-users course-box__users-icon"></i>
              <span class="course-box__users-count">250</span>
            </div>
            <span class="course-box__price">${
              c.price === 0 ? "Free" : "$" + c.price
            }</span>
          </div>
        </div>

        <div class="course-box__footer">
          <a href="#" class="course-box__footer-link">
            See More
            <i class="fa-solid fa-arrow-right course-box__footer-icon"></i>
          </a>
        </div>
      </div>
      `
    );
  });
};

const getAllCoursesAndShow = async () => {
  const showAllCoursesBtn = document.querySelector("#show-all-courses");

  const res = await fetch("http://localhost:4000/v1/courses");
  coursesData = await res.json();

  renderCourses(showAllCourses);

  showAllCoursesBtn.onclick = (e) => {
    e.preventDefault();
    showAllCourses = true;
    renderCourses(showAllCourses);
  };
};

getAllCoursesAndShow();

export { showUsernameInNavbar, showCoursesInTopBar, getAllCoursesAndShow };
