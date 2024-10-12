// Gán document.querySelector vào ký tự $
const $ = document.querySelector.bind(document);

// Gán document.querySelectorAll vào ký tự $$
const $$ = document.querySelectorAll.bind(document);

//=> Sau này khi gọi 1 node Element ra thì không cần viết lại document.querySelector nữa
//=> Cách viết tắt cho gọn chỉ cần gõ lại $ và $$ là ra.

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');
console.log(tabs);
console.log(panes);

const tabActive = $('.tab-item.active');
console.log([tabActive]);

const line = $('.tabs .line');
console.log(line);
line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';


tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function () {
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

        this.classList.add('active');
        pane.classList.add('active');
    };
});



