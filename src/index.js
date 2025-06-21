import './css/styles.css';
import renderAbout from './modules/about';
import renderHome from './modules/home';
import renderMenu from './modules/menu';
import renderContact from './modules/contact';

const navButtons = document.querySelectorAll(".nav-el button");
let activeNav = document.querySelector("li.nav-el:first-child")
const pageContent = document.getElementById("content");

navButtons.forEach(button => {
    button.addEventListener("click", handleNavButtonClick);
})

renderHome();

function handleNavButtonClick(e) {
    activeNav.classList.toggle("active");

    const liElement = e.target.closest("li.nav-el");

    liElement.classList.toggle("active");
    activeNav = liElement;

    pageContent.innerHTML = "";
    
    const navData = liElement.getAttribute("data-nav");
    switch (navData) {
        case "home":
            renderHome();
            break;
        case "menu":
            renderMenu();
            break;
        case "about":
            renderAbout();
            break;
        case "contact":
            renderContact();
            break;
        default:
            return;
    }
    
    window.scrollTo({
        top: 0
    });
}