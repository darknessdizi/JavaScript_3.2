const textArea = document.getElementById('editor');
const localText = localStorage.getItem('netology_textArea');

if (localText) {
    console.log('Загрузка кеша прошла успешно');
    textArea.value = localText;
}

textArea.addEventListener('input', () => {
    console.log('Идет обвновление кеша');
    localStorage.setItem('netology_textArea', textArea.value);
});

const btn = document.querySelector('.button-clearn');
btn.addEventListener('click', () => {
    textArea.value = '';
});