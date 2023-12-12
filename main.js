/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContactPage: () => (/* binding */ loadContactPage)\n/* harmony export */ });\n/* harmony import */ var _loadDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadDOM.js */ \"./src/loadDOM.js\");\n\r\n\r\nfunction loadContactPage() {\r\n    const contentDiv = document.querySelector(\"#content\");\r\n    \r\n    //remove all child elements from a div\r\n    if (contentDiv) {\r\n        while (contentDiv.firstChild) {\r\n            contentDiv.removeChild(contentDiv.firstChild);\r\n        }\r\n    }\r\n\r\n    contentDiv.appendChild((0,_loadDOM_js__WEBPACK_IMPORTED_MODULE_0__.createNavMenu)());\r\n\r\n    const contacts = [\r\n        {name: \"John\", title: \"director\", phone: \"000-111-222\", email: \"john@hof.com\"},\r\n        {name: \"Margaret\", title: \"chef\", phone: \"333-222-777\", email: \"margaret@hof.com\"},\r\n        {name: \"Rick\", title: \"restaurant manager\", phone: \"555-888-222\", email: \"rick@hof.com\"},\r\n    ];\r\n\r\n    contacts.forEach(contact => {\r\n        let div = document.createElement(\"div\");\r\n        let name = document.createElement(\"h2\");\r\n        let title = document.createElement(\"h4\");\r\n        let phone = document.createElement(\"p\");\r\n        let email = document.createElement(\"p\");\r\n        let img = document.createElement(\"img\");\r\n\r\n        div.classList.add(\"contact-card\");\r\n        name.textContent = contact.name;\r\n        title.textContent = contact.title;\r\n        phone.textContent = contact.phone;\r\n        email.textContent = contact.email;\r\n        img.src = `./images/${contact.name}.png`;\r\n\r\n        div.appendChild(name);\r\n        div.appendChild(title);\r\n        div.appendChild(phone);\r\n        div.appendChild(email);\r\n        div.appendChild(img);\r\n\r\n        contentDiv.appendChild(div);\r\n    })\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contactPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadDOM.js */ \"./src/loadDOM.js\");\n/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage.js */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage.js */ \"./src/contactPage.js\");\n\r\n\r\n\r\n\r\nfunction loadListeners() {\r\n    let menuItems = document.querySelectorAll(\".menu-item\");\r\n    menuItems.forEach(menuItem => {\r\n        menuItem.addEventListener(\"click\", menuEventHandler);\r\n    });\r\n}\r\n\r\nfunction menuEventHandler(event) {\r\n    switch(event.target.id) {\r\n        case \"home\":\r\n            (0,_loadDOM_js__WEBPACK_IMPORTED_MODULE_0__.loadContent)();\r\n            loadListeners();\r\n            break;\r\n        case \"menu\":\r\n            (0,_menuPage_js__WEBPACK_IMPORTED_MODULE_1__.loadMenuPage)();\r\n            loadListeners();\r\n            break;\r\n        case \"contact\":\r\n            (0,_contactPage_js__WEBPACK_IMPORTED_MODULE_2__.loadContactPage)();\r\n            loadListeners();\r\n            break;\r\n        default:\r\n            console.log(\"Error: None of the valid ids were clicked\");\r\n    }\r\n}\r\n\r\n(0,_loadDOM_js__WEBPACK_IMPORTED_MODULE_0__.loadContent)();\r\nloadListeners();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/loadDOM.js":
/*!************************!*\
  !*** ./src/loadDOM.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNavMenu: () => (/* binding */ createNavMenu),\n/* harmony export */   loadContent: () => (/* binding */ loadContent)\n/* harmony export */ });\nfunction loadContent() {\r\n    const content = document.querySelector(\"#content\");\r\n    const arrayOfSections = [createNavMenu(), createTitleSection(), createStorySection(), createReservationSection()];\r\n\r\n    //remove all child elements from a div\r\n    if (content) {\r\n        while (content.firstChild) {\r\n            content.removeChild(content.firstChild);\r\n        }\r\n    }\r\n\r\n    arrayOfSections.forEach(divElement => {\r\n        content.appendChild(divElement);\r\n    });\r\n\r\n    console.log(\"LOAD SUCCESSFULL!\");\r\n}\r\n\r\nfunction createNavMenu() {\r\n    // create all elements\r\n    const div = document.createElement(\"div\");\r\n    const logoImg = document.createElement(\"img\");\r\n    const ul = document.createElement(\"ul\");\r\n    const menuItems = [\"Home\", \"Menu\", \"Contact\", \"Book a table\"];\r\n\r\n    // add necessary data\r\n    div.id = \"navigation\";\r\n    logoImg.src = \"#\";\r\n    ul.classList.add(\"menu\");\r\n\r\n    // create menu items\r\n    menuItems.forEach( menuItem => {\r\n        let li = document.createElement(\"li\");\r\n        \r\n        li.classList.add(\"menu-item\");\r\n        li.id = menuItem.toLowerCase();\r\n        li.textContent = menuItem;\r\n\r\n        // when you get to this element, add this class for easier customization later in CSS\r\n        if (menuItem === \"Book a table\") {\r\n            li.classList.add(\"book-btn\");\r\n        }\r\n\r\n        ul.appendChild(li);\r\n    });\r\n\r\n    div.appendChild(logoImg);\r\n    div.appendChild(ul);\r\n\r\n    console.log(\"created navigation menu\");\r\n    // return the whole section\r\n    return div;\r\n}\r\n\r\nfunction createTitleSection() {\r\n    const div = document.createElement(\"div\");\r\n    const h1 = document.createElement(\"h1\");\r\n    const h3 = document.createElement(\"h3\");\r\n    const h6 = document.createElement(\"h6\");\r\n\r\n    div.id = \"title-section\";\r\n    h1.classList.add(\"main-title\");\r\n    h3.classList.add(\"sub-title\");\r\n    h6.classList.add(\"address-title\");\r\n\r\n    h1.textContent = \"Heaven of Food\";\r\n    h3.textContent = \"By friends for friends\";\r\n    h6.textContent = \"Never Hungry Street 23\";\r\n\r\n    div.appendChild(h1);\r\n    div.appendChild(h3);\r\n    div.appendChild(h6);\r\n    \r\n    console.log(\"created title section\");\r\n\r\n    return div;\r\n}\r\n\r\nfunction createStorySection() {\r\n    const div = document.createElement(\"div\");\r\n    const p = document.createElement(\"p\");\r\n    const img = document.createElement(\"img\");\r\n\r\n    div.id = \"our-story-section\";\r\n    p.classList.add(\"text\");\r\n    img.src = \"#\";\r\n\r\n    p.textContent = \"Heaven of food is a one-of-a-kind dining experience that seamlessly combines delectable fusion cuisine with an intriguing underwater ambience. This cozy restaurant nestled in the Never Hungry Street is the newest of the Heaven of Food franchise with branches all over the world. Heaven of Food is the manifestation of our vision to offer you an indulgent escape in the midst of the hustle and bustle of the city. We're all about building a fraternity of like-minded patrons who appreciate a great meal in good company. This is made possible through the soul-soothing delicacies we offer in a setting inspired by the intrigues of the world under water. Take a plunge and explore the many surprises we have lined up just for you.\";\r\n\r\n    div.appendChild(p);\r\n    div.appendChild(img);\r\n\r\n    console.log(\"created story section\");\r\n\r\n    return div;\r\n}\r\n\r\nfunction createReservationSection() {\r\n    const div = document.createElement(\"div\");\r\n    const h1 = document.createElement(\"h1\");\r\n    const h3 = document.createElement(\"h3\");\r\n    const emailBtn = document.createElement(\"button\");\r\n    const phoneBtn = document.createElement(\"button\");\r\n\r\n    div.id = \"reservation-section\";\r\n    h1.classList.add(\"cta-title\");\r\n    h1.textContent = \"Private dining\";\r\n    h3.classList.add(\"sub-title\");\r\n    h3. textContent = \"Your event, your way\";\r\n    emailBtn.textContent = \"Email Us\";\r\n    phoneBtn.textContent = \"Call Us\";\r\n\r\n    div.appendChild(h1);\r\n    div.appendChild(h3);\r\n    div.appendChild(emailBtn);\r\n    div.appendChild(phoneBtn);\r\n\r\n    console.log(\"created reservation section\");\r\n    return div;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/loadDOM.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenuPage: () => (/* binding */ loadMenuPage)\n/* harmony export */ });\n/* harmony import */ var _loadDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadDOM.js */ \"./src/loadDOM.js\");\n\r\n\r\nfunction loadMenuPage() {\r\n    const contentDiv = document.querySelector(\"#content\");\r\n    \r\n    //remove all child elements from a div\r\n    if (contentDiv) {\r\n        while (contentDiv.firstChild) {\r\n            contentDiv.removeChild(contentDiv.firstChild);\r\n        }\r\n    }\r\n\r\n    contentDiv.appendChild((0,_loadDOM_js__WEBPACK_IMPORTED_MODULE_0__.createNavMenu)());\r\n\r\n    // menu list\r\n    const foods = [\r\n        {title: \"Cordon Bleu\", img: \"./images/cordon.png\", text: \"It's delicous!\", price: \"25.00\"},\r\n        {title: \"Pizza\", img: \"./images/pizza.png\", text: \"Straight from Italy!\", price: \"20.00\"},\r\n        {title: \"Sandwich\", img: \"./images/sandwich.png\", text: \"To-go\", price: \"9.50\"},\r\n    ];\r\n\r\n    // create each menu item entry\r\n    foods.forEach(foodItem => {\r\n        let div = document.createElement(\"div\");\r\n        let h3 = document.createElement(\"h3\");\r\n        let img = document.createElement(\"img\");\r\n        let text = document.createElement(\"p\");\r\n        let price = document.createElement(\"p\");\r\n\r\n        div.classList.add(\"food-item\");\r\n        h3.textContent = foodItem.title;\r\n        img.src = foodItem.img;\r\n        img.classList.add(\"food-item-image\");\r\n        text.textContent = foodItem.text;\r\n        text.classList.add(\"food-item-text\");\r\n        price.textContent = foodItem.price + \" €\";\r\n        price.classList.add(\"food-item-price\");\r\n\r\n        div.appendChild(h3);\r\n        div.appendChild(text);\r\n        div.appendChild(img);\r\n        div.appendChild(price);\r\n\r\n        contentDiv.appendChild(div)\r\n    });\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menuPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;