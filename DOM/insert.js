// ! insetAdjacentText("position", "text")
// * Chèn text vào trong element nhưng khác hoàn toàn so với innerHTML và innerText

const h3 = document.querySelector("h3");

// * position bao gồm: beforebegin, afterbegin, beforeend, afterend.

h3.insertAdjacentText("beforebegin", "Xin chào bé châu");
h3.insertAdjacentText("afterbegin", "Cô chú chào lại");
h3.insertAdjacentText("beforeend", "bé chào cô chú");
h3.insertAdjacentText("afterend", "cháu chào cô chú");

// ! insertAdjacentElement("position", node)
const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("beforebegin", strong);

// ! insertAdjacentHTML()
const template = `    
    <ul class="menu">
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>`;

document.body.insertAdjacentHTML("beforeend", template);

