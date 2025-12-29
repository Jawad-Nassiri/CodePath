import { showUsernameInNavbar, showCoursesInTopBar, getAllCoursesAndShow } from './funcs/shared.js';

window.addEventListener('load', async () => {
    showUsernameInNavbar();
    showCoursesInTopBar();
    getAllCoursesAndShow();
})
