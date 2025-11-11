// your JS code here. If required.

let submitButton = document.getElementById("submit");
let existingButton = document.getElementById("existing");
let checkbox = document.getElementById("checkbox");
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");


window.addEventListener("load", () => {
  if (localStorage.getItem("data")) {
    existingButton.hidden = false;
  }
});

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  let username = usernameInput.value;
  let password = passwordInput.value;

  alert(`Logged in as ${username}`);


  if (checkbox.checked) {
    let data = { username, password };
    localStorage.setItem("data", JSON.stringify(data));
  } else {

    localStorage.removeItem("data");
  }

  
  if (localStorage.getItem("data")) {
    existingButton.hidden = false;
  } else {
    existingButton.hidden = true;
  }
});


existingButton.addEventListener("click", function () {
  let stored = localStorage.getItem("data");
  if (stored) {
    let data = JSON.parse(stored);
    alert(`Logged in as ${data.username}`);
  }
});
