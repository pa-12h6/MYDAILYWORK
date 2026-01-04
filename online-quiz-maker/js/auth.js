function login() {
  const username = document.getElementById("username").value;

  if (username === "") {
    alert("Please enter username");
    return;
  }

  localStorage.setItem("user", username);
  alert("Login successful");
}
