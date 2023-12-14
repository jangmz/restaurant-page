import { loadContent, setActive } from "./loadDOM.js";
import { loadMenuPage } from "./menuPage.js";
import { loadContactPage } from "./contactPage.js";
import "./style.css";

function loadListeners() {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(menuItem => {
        menuItem.addEventListener("click", menuEventHandler);
    });
}

function menuEventHandler(event) {
    switch(event.target.id) {
        case "home":
            loadContent();
            setActive(event.target.id);
            loadListeners();
            break;
        case "menu":
            loadMenuPage();
            setActive(event.target.id);
            loadListeners();
            break;
        case "contact":
            loadContactPage();
            setActive(event.target.id);
            loadListeners();
            break;
        default:
            console.log("Error: None of the valid ids were clicked");
    }
}

loadContent();
setActive("home");
loadListeners();