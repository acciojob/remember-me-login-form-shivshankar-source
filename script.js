const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitButton = document.getElementById("submit");
const existingButton = document.getElementById("existing");

window.addEventListener("load", () => {
  const savedData = localStorage.getItem("credentials");
  existingButton.hidden = !savedData;
});


submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) return;

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    localStorage.setItem("credentials", JSON.stringify({ username, password }));
    existingButton.hidden = false;
  } else {
    localStorage.removeItem("credentials");
    existingButton.hidden = true;
  }
});


existingButton.addEventListener("click", () => {
  const saved = JSON.parse(localStorage.getItem("credentials"));
  if (saved) alert(`Logged in as ${saved.username}`);
});
