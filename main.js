// create header element with h1 and nav
const myHeader = document.createElement("header");
let textHeader = document.createElement("h1");
let navBar = document.createElement("nav");
let ulNav = document.createElement("ul");
let liHome = document.createElement("li");
let liAbout = document.createElement("li");
let liContact = document.createElement("li");
// style the body
document.body.style.background = "#ebe6e6"; 
document.body.style.margin = "0px";
document.body.style.padding = "0px"; 
// style and append elements
myHeader.style.display = "flex";
myHeader.style.justifyContent = "space-between";
myHeader.style.alignItems = "center";
myHeader.style.padding = "30px";
myHeader.style.backgroundColor = "#d2bfbfff";
navBar.style.marginRight = "20px";
textHeader.style.fontSize = "36px";
textHeader.style.marginLeft = "20px";
function setupHeader() {
textHeader.addEventListener("mouseenter", () => {
    textHeader.style.color = "red";
    textHeader.style.cursor = "pointer";
    textHeader.style.transform = "scale(1.3)";
    textHeader.style.transition = "all 0.3s ease";
});
textHeader.addEventListener("mouseleave", () => {
    textHeader.style.color = "blue";
    textHeader.style.transform = "scale(1.1)";
});
} 
setupHeader();
function hoverEffect(el) {
    el.addEventListener("mouseenter", () => {
        el.style.color = "red";
        el.style.transform = "scale(1.2)";
        el.style.transition = "all 0.3s ease";
    });
    el.addEventListener("mouseleave", () => {
        el.style.color = "black";
        el.style.transform = "scale(1)";
    });
}
[liHome, liAbout, liContact].forEach(hoverEffect);
// style nav elements
ulNav.style.cursor = "pointer";
ulNav.style.fontFamily = "Arial, sans-serif";
ulNav.style.fontSize = "1.1em";
ulNav.style.fontWeight = "bold";
ulNav.style.textAlign = "center";
ulNav.style.textShadow = "1px 1px 2px #888888";
ulNav.style.display = "flex";
ulNav.style.justifyContent = "space-around";
ulNav.style.alignItems = "center";
ulNav.style.width = "200px";
// append elements to the DOM
textHeader.style.textShadow = "2px 2px 4px #aaaaaa";
textHeader.style.fontFamily = "Arial, sans-serif";
textHeader.style.color = "blue";
textHeader.style.margin = "0px";
textHeader.style.padding = "0px";
textHeader.style.fontSize = "1.5em";
textHeader.textContent = "Hazem";
liContact.textContent = "Contact";
liHome.textContent = "Home";
liAbout.textContent = "About";
ulNav.style.listStyleType = "none";
ulNav.style.margin = "0px";
ulNav.style.padding = "0px";
myHeader.appendChild(textHeader);
ulNav.appendChild(liHome);
ulNav.appendChild(liAbout);
ulNav.appendChild(liContact);
navBar.appendChild(ulNav);
myHeader.appendChild(navBar);
document.body.appendChild(myHeader);
// create main div 

const mainDiv = document.createElement("div");
mainDiv.className = "main-content";
mainDiv.style.padding = "20px";
mainDiv.style.fontFamily = "Arial, sans-serif"; 
// create cards for looping
for (let i = 1; i <= 11; i++) {
    let card = document.createElement("div");
    card.className = "card";
    card.style.width = "300px";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.alignItems = "flex-start";
    card.style.justifyContent = "center";
    card.style.backgroundColor = "#f9f9f9";
    card.style.border = "1px solid #ccc";
    card.style.borderRadius = "8px";
    card.style.padding = "15px";
    card.style.marginBottom = "20px";
    card.style.boxShadow = "2px 2px 12px #aaaaaa";
    let cardTitle = document.createElement("h2");
    cardTitle.textContent = `Card Title ${i}`;
    cardTitle.style.color = "#333";
    let cardContent = document.createElement("p");
    cardContent.textContent = `This is the content of card number ${i}. It contains some sample text to illustrate the card layout.`;
    cardContent.style.color = "#666";
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.02)";
        card.style.boxShadow = "4px 4px 16px #888888";
        card.style.transition = "all 0.3s ease";
        card.style.cursor = "pointer";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "2px 2px 12px #aaaaaa";
    });
    card.appendChild(cardTitle);
    card.appendChild(cardContent);
    mainDiv.appendChild(card);
}
document.body.appendChild(mainDiv);
mainDiv.style.backgroundColor = "#ea7272ff";
mainDiv.style.display = "grid";
mainDiv.style.gridTemplateRows = "auto auto auto";
mainDiv.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
mainDiv.style.justifyContent = "space-around";
mainDiv.style.rowGap = "20px";