const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // не перезавантажуємо сторінку

  const { email, password } = form.elements;

  const data = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  // валідація через JS: поля не можуть бути порожніми (після trim)
  if (!data.email || !data.password) {
    alert('All form fields must be filled in');
    return;
  }

  console.log(data);   // виводимо об’єкт у консоль
  form.reset();        // очищаємо форму
});
