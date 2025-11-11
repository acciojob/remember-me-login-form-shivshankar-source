// your JS code here. If required.

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitButton = document.getElementById("submit");
const existingButton = document.getElementById("existing");


window.addEventListener("load", () => {
  const savedData = localStorage.getItem("credentials");
  if (savedData) {
    existingButton.hidden = false;
  } else {
    existingButton.hidden = true;
  }
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === "" || password === "") return;

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    // Remember user
    const userData = { username, password };
    localStorage.setItem("credentials", JSON.stringify(userData));
    existingButton.hidden = false;
  } else {
    // Forget user
    localStorage.removeItem("credentials");
    existingButton.hidden = true;
  }
});

existingButton.addEventListener("click", () => {
  const savedData = JSON.parse(localStorage.getItem("credentials"));
  if (savedData) {
    alert(`Logged in as ${savedData.username}`);
  }
});
