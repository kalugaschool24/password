const password = document.getElementById('password')
const button = document.getElementById('button')
button.addEventListener('click', function(){
    if (password.type === 'text') {
        password.type='password'
        button.textContent='Показать пароль'
    } else if (password.type === "password") {
        password.type='text'
        button.textContent='Скрыть пароль'
    }
}) 