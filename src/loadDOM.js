export function loadContent() {
    const content = document.querySelector("#content");
    const arrayOfSections = [createNavMenu(), createTitleSection(), createStorySection(), createReservationSection()];

    //remove all child elements from a div
    if (content) {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
    }

    arrayOfSections.forEach(divElement => {
        content.appendChild(divElement);
    });

    console.log("LOAD SUCCESSFULL!");
}

export function createNavMenu() {
    // create all elements
    const div = document.createElement("div");
    const logoImg = document.createElement("img");
    const ul = document.createElement("ul");
    const menuItems = ["Home", "Menu", "Contact", "Book a table"];

    // add necessary data
    div.id = "navigation";
    logoImg.src = "#";
    ul.classList.add("menu");

    // create menu items
    menuItems.forEach( menuItem => {
        let li = document.createElement("li");
        
        li.classList.add("menu-item");
        li.id = menuItem.toLowerCase();
        li.textContent = menuItem;

        // when you get to this element, add this class for easier customization later in CSS
        if (menuItem === "Book a table") {
            li.classList.add("book-btn");
        }

        ul.appendChild(li);
    });

    div.appendChild(logoImg);
    div.appendChild(ul);

    console.log("created navigation menu");
    // return the whole section
    return div;
}

function createTitleSection() {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const h3 = document.createElement("h3");
    const h6 = document.createElement("h6");

    div.id = "title-section";
    h1.classList.add("main-title");
    h3.classList.add("sub-title");
    h6.classList.add("address-title");

    h1.textContent = "Heaven of Food";
    h3.textContent = "By friends for friends";
    h6.textContent = "Never Hungry Street 23";

    div.appendChild(h1);
    div.appendChild(h3);
    div.appendChild(h6);
    
    console.log("created title section");

    return div;
}

function createStorySection() {
    const div = document.createElement("div");
    const title = document.createElement("h1");
    const p = document.createElement("p");
    const img = document.createElement("img");

    div.id = "our-story-section";
    p.classList.add("text");
    img.src = "./images/story.jpg";

    p.textContent = "Heaven of food is a one-of-a-kind dining experience that seamlessly combines delectable fusion cuisine with an intriguing underwater ambience. This cozy restaurant nestled in the Never Hungry Street is the newest of the Heaven of Food franchise with branches all over the world. Heaven of Food is the manifestation of our vision to offer you an indulgent escape in the midst of the hustle and bustle of the city. We're all about building a fraternity of like-minded patrons who appreciate a great meal in good company. This is made possible through the soul-soothing delicacies we offer in a setting inspired by the intrigues of the world under water. Take a plunge and explore the many surprises we have lined up just for you.";
    title.textContent = "Our story";

    div.appendChild(title);
    div.appendChild(p);
    div.appendChild(img);

    console.log("created story section");

    return div;
}

function createReservationSection() {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const h3 = document.createElement("h3");
    const emailBtn = document.createElement("button");
    const phoneBtn = document.createElement("button");

    div.id = "reservation-section";
    h1.classList.add("cta-title");
    h1.textContent = "Private dining";
    h3.classList.add("sub-title");
    h3. textContent = "Your event, your way";
    emailBtn.textContent = "Email Us";
    phoneBtn.textContent = "Call Us";

    div.appendChild(h1);
    div.appendChild(h3);
    div.appendChild(emailBtn);
    div.appendChild(phoneBtn);

    console.log("created reservation section");
    return div;
}