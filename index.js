
let myH1 = document.getElementsByTagName("h1")[0];
myH1.innerHTML = "Fruits & Vegetables Corp";


let changeList = document.querySelector("[href='#bananas']");
changeList.setAttribute("href", "#vegetables");
changeList.innerHTML = "Vegetables";

let myH2about = document.createElement("h2");
myH2about.innerHTML = "About";


let myH2contact = document.createElement("h2");
myH2contact.innerHTML = "Contact";

let mySectionAbout = document.querySelector("#about");

let newHtml = "<p>" + mySectionAbout.textContent + "</p>";
mySectionAbout.innerHTML = newHtml;

let mySectionContact = document.querySelector("#contact");
mySectionContact.parentNode.insertBefore(mySectionAbout, mySectionContact.parentNode.firstChild);
mySectionAbout.insertBefore(myH2about, mySectionAbout.children[0]);
mySectionContact.insertBefore(myH2contact, mySectionContact.children[0]);

let addThead1 = document.createElement("th");
addThead1.innerHTML = "Name";

let addThead2 = document.createElement("th");
addThead2.innerHTML = "Email";

let tableHead = document.querySelector("tr");
tableHead.deleteCell(0);
tableHead.deleteCell(0);
tableHead.appendChild(addThead1);
tableHead.appendChild(addThead2);

let myCss = document.querySelector("head");
let addCss  = document.createElement("link");
addCss.setAttribute('href', 'main.css');
addCss.setAttribute('rel', 'stylesheet');
addCss.setAttribute('type', 'text/css');
myCss.appendChild(addCss);

document.title = "Fruits & Vegetables Corp";

