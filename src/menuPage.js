import { createNavMenu, createFooter } from "./loadDOM.js";

export function loadMenuPage() {
    const contentDiv = document.querySelector("#content");
    
    //remove all child elements from a div
    if (contentDiv) {
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
    }

    contentDiv.appendChild(createNavMenu());

    // menu list
    const foods = [
        {title: "Cordon Bleu", img: "./images/cordon.png", text: "It's delicous!", price: "25.00"},
        {title: "Pizza", img: "./images/pizza.png", text: "Straight from Italy!", price: "20.00"},
        {title: "Sandwich", img: "./images/sandwich.png", text: "To-go", price: "9.50"},
    ];

    // create each menu item entry
    foods.forEach(foodItem => {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        let img = document.createElement("img");
        let text = document.createElement("p");
        let price = document.createElement("p");

        div.classList.add("food-item");
        h3.textContent = foodItem.title;
        img.src = foodItem.img;
        img.classList.add("food-item-image");
        text.textContent = foodItem.text;
        text.classList.add("food-item-text");
        price.textContent = foodItem.price + " €";
        price.classList.add("food-item-price");

        div.appendChild(h3);
        div.appendChild(text);
        div.appendChild(img);
        div.appendChild(price);

        contentDiv.appendChild(div)
    });
    contentDiv.appendChild(createFooter());
}