const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  clearErrorMessages();

  const username = form.querySelector("input[name='name']");
  const email = form.querySelector("input[name='email']");
  const password = form.querySelector("input[name='password']");
  const confirmPassword = form.querySelector("input[name='confirmpw']");
  let valid = true;

  if (usernameValidation(username.value)) {
    username.parentElement.parentElement.classList.add("success");
  } else {
    showError(username, "username isnt valid");
    valid = false;
  }

  if (emailValidation(email.value)) {
    email.parentElement.parentElement.classList.add("success");
  } else {
    showError(email, "please enter a valid email");
    valid = false;
  }

  if (passwordValidation(password.value)) {
    password.parentElement.parentElement.classList.add("success");
  } else {
    showError(password, "username isnt valid");
    valid = false;
  }

  if (confirmpasswordValidation(password.value, confirmPassword.value)) {
    confirmPassword.parentElement.parentElement.classList.add("success");
  } else {
    showError(confirmPassword, "username isnt valid");
    valid = false;
  }

  console.log(event.target);
});

function usernameValidation(user) {
  let isvalid = true;
  isvalid = user === user.toLocaleLowerCase();
  isvalid = user.length > 4 && user.length < 11;

  return isvalid;
}

function emailValidation(mail) {
  let isvalid = true;
  isvalid = mail.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return isvalid;
}

function passwordValidation(pw) {
  let isvalid = true;
  isvalid = pw.length >= 8 && pw.length <= 15;

  return isvalid;
}
function confirmpasswordValidation(pw, confirmpw) {
  let isvalid = true;
  console.log(pw);
  console.log(confirmpw);

  isvalid = pw === confirmpw;
  return isvalid;
}

function showError(element, message) {
  const inputMessage = element.parentElement.nextElementSibling;
  console.log(element);

  inputMessage.innerText = message;
  element.parentElement.parentElement.classList.add("error");
}

function clearErrorMessages() {
  const errorMessages = form.querySelectorAll(".msg p");
  const errorDivs = form.querySelectorAll(".msg");

  errorDivs.forEach((div) => {
    div.classList.remove("success", "error");
  });

  errorMessages.forEach((message) => {
    message.textContent = ""; // Clear the message
  });
}
