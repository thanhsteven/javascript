const tabs = document.querySelectorAll('.tab-item');
const panes = document.querySelectorAll('.tab-pane');

const tabActive = document.querySelector('.tab-item.active');

const line = document.querySelector('.tabs .line');

line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'

tabs.forEach(function (tab, index) {
    const pane = panes[index];
    tab.onclick = function () {
        const tabActive = document.querySelector('.tab-item.active');
        const paneActive = document.querySelector('.tab-pane.active');
        paneActive.classList.remove('active');
        tabActive.classList.remove('active');

        line.style.left = tab.offsetLeft + 'px';
        line.style.width = tab.offsetWidth + 'px';

        tab.classList.add('active');
        pane.classList.add('active');
    }
})