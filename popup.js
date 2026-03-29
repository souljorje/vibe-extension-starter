const helloButton = document.getElementById("hello-button");
const message = document.getElementById("message");

helloButton.addEventListener("click", () => {
  message.textContent = "The popup is working.";
});
