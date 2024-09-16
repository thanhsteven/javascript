// ! selector.classList.add("classname")
const container = document.querySelector(".container");
container.classList.add("is-active");

// ! selector.classList.remove("classname")
container.classList.remove("container");

// ! selector.classList.contains("classname")
console.log(container.classList.contains("is-active"));

// ! selector.classList.toggle("is-active")
// - Hoạt động: Nếu selector đó có class đó rồi thì nó sẽ remove đi còn ngược lại chưa có thì add vào.
container.classList.toggle("container");

// ! selector.classname
// - Trả ra chuỗi các class của selector
const title = document.querySelector(".title");
console.log(title.className);
title.className = "title";
