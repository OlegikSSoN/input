document.getElementById("send_btn").addEventListener("click", function (e) {
  e.preventDefault();
  const NAME = document.getElementById("name").value;
  const LASTNAME = document.getElementById("lastname").value;
  const NICKNAME = document.getElementById("nickname").value;
  const EMAIL = document.getElementById("email").value;
  const PASSWORD = document.getElementById("password").value;
  const PASSWORD2 = document.getElementById("password2").value;

  alert(
    `Ім'я: ${NAME} Прізвище: ${LASTNAME} Нік: ${NICKNAME} E-mail: ${EMAIL} Пароль: ${PASSWORD} Під. пароль: ${PASSWORD2}`
  );
});
