// document.title
// document.head
document.title = "Welcome to Javascript";
console.log(document.title);

console.log(document.head);
const meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width, initial-scale=1.0");

document.head.appendChild(meta);
const head = document.getElementsByTagName("head");
head[0].appendChild(meta);
console.log(head);

// ! insertBefore
// * parentNode.insertBefore(newnode, existingnode)
// document.body.insertBefore();
const ul = document.querySelector("ul");
document.body.insertBefore(ul, document.querySelector("h3"));

// ! replaceChild
// * node.replaceChild(newnode, oldnode)
const span = document.createElement("span");
span.textContent = "abc";
document.body.replaceChild(span, document.querySelector(".boxed"));

// ! convert HTML Collection, NodeList to Array
const li = document.getElementsByTagName("li");
console.log(li);
li.forEach((item) => item);

// ! Selector Đặc biệt
// - HTML body head title
// - html: document.documentElement
// - body: document.body
// - head: document.head
// - title: document.title
