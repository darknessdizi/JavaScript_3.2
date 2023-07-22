const signinForm = document.getElementById('signin__form');

if (localStorage.hasOwnProperty('netology_task_3_2_myID')) {
    showWelcome();
}

signinForm.onsubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('https://students.netoservices.ru/nestjs-backend/auth', {
        method: 'POST',
        body: new FormData(signinForm),
    });
    const result = await response.json();

    if (result.success) {
        localStorage.setItem('netology_task_3_2_myID', result.user_id);
        showWelcome();
    } else {
        alert('Неверный логин/пароль');
    }
    signinForm.reset();
}

function showWelcome() {
    const signin = document.getElementById('signin');
    const welcome = document.getElementById('welcome');
    const span = welcome.querySelector('span');
    const btn = welcome.querySelector('.btn');
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    span.textContent = localStorage.getItem('netology_task_3_2_myID');
    btn.addEventListener('click', () => {
        localStorage.removeItem('netology_task_3_2_myID');
        signin.classList.add('signin_active');
        welcome.classList.remove('welcome_active');
        span.textContent = '';
    });
}