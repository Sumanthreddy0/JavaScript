function displayGreeting() {
  const h = new Date().getHours();
  let g = h < 12 ? "Good Morning!" : h < 18 ? "Good Afternoon!" : "Good Evening!";
  document.getElementById("greeting").textContent = g;
}
window.onload = displayGreeting;

document.getElementById("quizForm").onsubmit = function (e) {
  e.preventDefault();
  const a = document.getElementById("quizAnswer").value.trim().toUpperCase();
  document.getElementById("quizResult").textContent =
    a === "WAD" ? "Correct!" : "Incorrect. The correct answer is WAD.";
};

function calculate() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("operation").value;
  const r =
    op === "add"
      ? n1 + n2
      : op === "subtract"
      ? n1 - n2
      : op === "multiply"
      ? n1 * n2
      : n2 !== 0
      ? n1 / n2
      : "Cannot divide by zero";
  document.getElementById("calcResult").textContent = `Result: ${r}`;
}

document.getElementById("userForm").onsubmit = function (e) {
  e.preventDefault();
  const n = document.getElementById("name").value.trim();
  const em = document.getElementById("email").value.trim();
  const ph = document.getElementById("phone").value.trim();

  if (!/^[A-Za-z ]{3,}$/.test(n)) {
    alert("Invalid Name");
    return;
  }
  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(em)) {
    alert("Invalid Email");
    return;
  }
  if (!/^\\d{10}$/.test(ph)) {
    alert("Invalid Phone");
    return;
  }
  alert("Form submitted!");
};


