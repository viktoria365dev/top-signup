document.getElementById("signup-form").addEventListener("submit", function (e) {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

  confirmPassword.setCustomValidity("");

  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords do not match");
    confirmPassword.reportValidity();
    e.preventDefault();
  }
});

document.querySelectorAll("#signup-form input").forEach((input) => {
  input.addEventListener("blur", () => {
    input.classList.add("touched");
  });
});
