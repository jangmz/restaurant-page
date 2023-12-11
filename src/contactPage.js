import {createNavMenu} from "./loadDOM.js";

export function loadContactPage() {
    const contentDiv = document.querySelector("#content");
    
    //remove all child elements from a div
    if (contentDiv) {
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
    }

    contentDiv.appendChild(createNavMenu());

    const contacts = [
        {name: "John", title: "director", phone: "000-111-222", email: "john@hof.com"},
        {name: "Margaret", title: "chef", phone: "333-222-777", email: "margaret@hof.com"},
        {name: "Rick", title: "restaurant manager", phone: "555-888-222", email: "rick@hof.com"},
    ];

    contacts.forEach(contact => {
        let div = document.createElement("div");
        let name = document.createElement("h2");
        let title = document.createElement("h4");
        let phone = document.createElement("p");
        let email = document.createElement("p");
        let img = document.createElement("img");

        div.classList.add("contact-card");
        name.textContent = contact.name;
        title.textContent = contact.title;
        phone.textContent = contact.phone;
        email.textContent = contact.email;
        img.src = `./images/${contact.name}.png`;

        div.appendChild(name);
        div.appendChild(title);
        div.appendChild(phone);
        div.appendChild(email);
        div.appendChild(img);

        contentDiv.appendChild(div);
    })
}