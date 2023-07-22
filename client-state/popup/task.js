const div = document.getElementById('subscribe-modal');
// document.cookie = "name=John";
// document.cookie = "user=John;";

if (!div.className.includes('active')) {
    if (getCookie('statusWindow')) {
        console.log('Мы уже ручками закрыли окно!!! Cookie уже были созданы.')
    } else {
        div.classList.add('modal_active');
    }
} 

const divClose = document.querySelector('.modal__close');
divClose.addEventListener('click', () => {
    div.classList.remove('modal_active');
    const name = 'statusWindow';
    const value = 'true';
    console.log(encodeURIComponent(name) + '=' + encodeURIComponent(value));
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
});

function getCookie(key) {
    // const text = 'name=John; lastname=Ivan; first=1; user=John';  // delete
    // const list = text.split('; ');   // delete
    const list = document.cookie.split('; ');
    const element = list.find((item) => {
        return item.startsWith(key + '=');
    })
    if (element) {
        return element.slice(key.length + 1);
    } 
}