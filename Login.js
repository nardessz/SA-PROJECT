const loginBtn = document.getElementById('login-btn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  emailInput.value = '';
  passwordInput.value = '';
});