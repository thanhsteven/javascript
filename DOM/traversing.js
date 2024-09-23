// ! Parent Node, parent element, removeChild
// * Parent Node và parent element
// - Về cơ bản thì đều lấy phần tử cha

const span = document.querySelector("span");
console.log(span);
console.log(span.parentNode);
console.log(span.parentElement);

// span.parentElement.removeChild(span);
// span.parentNode.removeChild(span);
// span.remove();

// ! nextElementSibling vs previousElementSibling
// * nextElementSibling: là chọn phần tử đứng sau nó.
const nextSpan = span.nextElementSibling;
console.log(nextSpan);
// * previousElementSibling: là chọn phần tử đứng trước nó.
const preSpan = span.previousElementSibling;
console.log(preSpan);

// ! childNodes và children
// * childNodes: trả về 1 Nodelist bao gồm hết các node bên trong, kể cả textNodes.
console.log(span.childNodes);
// * children: trả về các node không bao gồm textNodes
console.log(span.children);

// ! firstChild và firstElementChild
// * firstChild: lấy phần tử con đầu tiên, bao gồm cả textNodes.
console.log(span.firstChild);
// * firstElementChild: lấy thẻ con đầu tiên
console.log(span.firstElementChild);

// ! lastChild và lastElementChild
// * lastChild: lấy phần tử con cuối cùng, bao gồm cả textNodes
console.log(span.lastChild);
// * lastElementChild: lấy thẻ con cuối cùng.
console.log(span.lastElementChild);

// ! nextSibling và previousSibling
console.log(span.nextSibling);
console.log(span.previousSibling);
