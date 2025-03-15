const emailIcon = document.getElementById("email--icon");
const emailInput = document.getElementById("email");
const emailForm = document.getElementById("emailForm");
const formInput = document.querySelector(".form-input");
const successMessage = document.querySelector(".message.success");
const errorMessage = document.querySelector(".message.error");
const warningMessage = document.querySelector(".message.warning");
const btnClearInput = document.querySelector(".btn.outline");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailIcon.addEventListener("click", () => {
  emailInput.focus();
});

emailForm.addEventListener("submit", (ev) => {
  const inputValue = emailInput.value.trim();
  ev.preventDefault();

  if (inputValue === "") {
    handleEmptyInput();
  } else if (regex.test(inputValue)) {
    handleValidEmail();
  } else {
    handleInvalidEmail();
  }
});

btnClearInput.addEventListener("click", () => {
  emailInput.value = "";
  formInput.style.outline = "none";
  hideAllMessages();
});

function handleEmptyInput() {
  emailInput.focus();
  formInput.style.outline = "2px solid var(--accent)";
  showMessage(warningMessage, false);
}

function handleValidEmail() {
  emailInput.blur();
  formInput.style.outline = "none";
  showMessage(successMessage, true);
}

function handleInvalidEmail() {
  emailInput.focus();
  formInput.style.outline = "2px solid var(--error)";
  showMessage(errorMessage, false);
}

function hideAllMessages() {
  successMessage.hidden = true;
  errorMessage.hidden = true;
  warningMessage.hidden = true;
}

function showMessage(messageElement, isSuccess) {
  hideAllMessages();

  messageElement.hidden = false;

  emailInput.setAttribute("aria-invalid", !isSuccess);
}
