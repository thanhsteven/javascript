// * Cách 2: tạo code html bằng Javascipt
const template = `<div class="modal">
      <div class="modal-content">
        <i class="fa fa-times modal-close"></i>
        <div class="modal-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          impedit praesentium commodi, eum aliquid temporibus! Ab recusandae
          velit quae, aliquid aperiam sapiente. Eius reprehenderit modi iste
          explicabo velit perferendis aliquam?
        </div>
        <div class="modal-action">
          <button class="modal-submit">Confirm</button>
          <button class="modal-cancel">Cancel</button>
        </div>
      </div>
    </div>`;
const body = document.body;
// body.insertAdjacentHTML("afterbegin", template);

// * Cách 3
const modal = document.createElement("div");
modal.classList.add("modal");

const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);

const modalClose = document.createElement("i");
modalClose.className = "fa fa-times modal-close";
modalContent.appendChild(modalClose);

const modalDesc = document.createElement("div");
modalDesc.classList.add("modal-desc");
modalDesc.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium impedit praesentium commodi, eum aliquid temporibus! Ab recusandae velit quae, aliquid aperiam sapiente. Eius reprehenderit modi iste explicabo velit perferendis aliquam?";
modalContent.appendChild(modalDesc);

body.appendChild(modal);

// * Cách 1: Viết code html trực tiếp
const modalActive = document.querySelector(".modal");
if (modalActive) {
  setTimeout(function () {
    modalActive.classList.add("is-show");
  }, 3000);
}

