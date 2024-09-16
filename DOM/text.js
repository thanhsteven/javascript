// ! textContent
// - Lấy nội dung bên trong của selector, bao gồm cả các khoảng trắng của nó.
const spinner = document.querySelector("#spinner");
// Gán cho giá trị mới (content mới)
// spinner.textContent = "Hello new content !";
console.log(spinner.textContent);

// ! innerText
// - Giống textContent nhưng không lấy được nội dung bị ẩn đi và không lấy được các content bao gồm khoảng trắng.
console.log(spinner.innerText);

// ! innerHTML
// spinner.textContent = `<div class="demo">Hello HTML !</div>`;
console.log(spinner.innerHTML);
spinner.innerHTML = '<div class="demo">Hello HTML !</div>';
