<html>
  <body>
    <script type="text/javascript">
      
      var hours = new Date().getHours();
      var greeting = hours < 12 ? "Good Morning!" : hours < 18 ? "Good Afternoon!" : "Good Evening!";
      document.write("<h1>" + greeting + "</h1><br />");

      var quizAnswer = prompt("What is the short form of 'Web Application Development'?");
      if (quizAnswer && quizAnswer.trim().toUpperCase() === "WAD") {
        document.write("Quiz Result: Correct!<br />");
      } else {
        document.write("Quiz Result: Incorrect. The correct answer is WAD.<br />");
      }

      var num1 = parseFloat(prompt("Enter first number:"));
      var operation = prompt("Enter operation (+, -, *, /):");
      var num2 = parseFloat(prompt("Enter second number:"));
      var calcResult;

      if (operation === "+") calcResult = num1 + num2;
      else if (operation === "-") calcResult = num1 - num2;
      else if (operation === "*") calcResult = num1 * num2;
      else if (operation === "/" && num2 !== 0) calcResult = num1 / num2;
      else calcResult = "Invalid operation or division by zero";

      document.write("Calculator Result: " + calcResult + "<br />");

      var name = prompt("Enter your name (at least 3 letters):");
      var email = prompt("Enter your email:");
      var phone = prompt("Enter your phone number (10 digits):");

      if (!/^[A-Za-z ]{3,}$/.test(name)) {
        document.write("Form Validation: Invalid name.<br />");
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.write("Form Validation: Invalid email.<br />");
      } else if (!/^\d{10}$/.test(phone)) {
        document.write("Form Validation: Invalid phone number.<br />");
      } else {
        document.write("Form Validation: Form submitted successfully!<br />");
      }
    </script>
  </body>
</html>



