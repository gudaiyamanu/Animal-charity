function donate() {
  const amount = document.getElementById("amount").value;
  const message = document.getElementById("message");

  if (amount === "" || amount <= 0) {
    message.style.color = "red";
    message.textContent = "Please enter a valid donation amount.";
  } else {
    message.style.color = "green";
    message.textContent = `Thank you for donating s₹${amount}! 🐾❤️`;
    document.getElementById("amount").value = "";
  }
}

function scrollToDonate() {
  document.getElementById("donate").scrollIntoView({ behavior: "smooth" });
}
