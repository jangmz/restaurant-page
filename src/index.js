import {loadContent} from "./loadDOM.js";
import {loadMenuPage} from "./menuPage.js";
import {loadContactPage} from "./contactPage.js";

function menuEventHandler(event) {
    switch(event.target.id) {
        case "home":
            loadContent();
            break;
        case "menu":
            loadMenuPage();
            break;
        case "contact":
            loadContactPage();
            break;
        default:
            console.log("Error: None of the valid ids were clicked");
    }
}

loadContent();

document.addEventListener("DOMContentLoaded", () => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(menuItem => {
        menuItem.addEventListener("click", menuEventHandler);
    })
});