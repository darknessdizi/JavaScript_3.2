const div = document.getElementById('subscribe-modal');

if (!div.className.includes('active')) {
    if (getCookie('statusWindow') != 'true') {
        div.classList.add('modal_active');
    } 
} 

const divClose = document.querySelector('.modal__close');
divClose.addEventListener('click', () => {
    div.classList.remove('modal_active');
    const name = 'statusWindow';
    const value = 'true';
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
});

function getCookie(key) {
    const list = document.cookie.split('; ');
    const element = list.find((item) => {
        return item.startsWith(key + '=');
    });
    
    if (element) {
        return element.slice(key.length + 1);
    } 
}