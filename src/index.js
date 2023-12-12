import { loadContent } from "./loadDOM.js";
import { loadMenuPage } from "./menuPage.js";
import { loadContactPage } from "./contactPage.js";

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
            loadListeners();
            break;
        case "menu":
            loadMenuPage();
            loadListeners();
            break;
        case "contact":
            loadContactPage();
            loadListeners();
            break;
        default:
            console.log("Error: None of the valid ids were clicked");
    }
}

loadContent();
loadListeners();