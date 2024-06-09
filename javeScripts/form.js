const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const yourEmail = document.getElementById("your-email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (firstName.value === "" || firstName.value == null) {
    messages.push("First name is required");
  }

  if (lastName.value === "" || lastName.value == null) {
    messages.push("Last name is required");
  }

  if (yourEmail.value === "" || yourEmail.value == null) {
    messages.push("Your email is required");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});
