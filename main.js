console.log('Главный модуль');
const loginResult = login('admin', 'password');
console.log('Результат входа: ' + loginResult);
const registerResult = register('newuser', 'newpassword', 'user@example.com');
console.log('Результат регистрации: ' + registerResult);