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
body.insertAdjacentHTML("afterbegin", template);

// * Cách 1: Viết code html trực tiếp
const modal = document.querySelector(".modal");
if (modal) {
  setTimeout(function () {
    modal.classList.add("is-show");
  }, 3000);
}

