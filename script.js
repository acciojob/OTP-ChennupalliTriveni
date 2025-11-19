const inputs = document.querySelectorAll(".code");

// Focus first input
inputs[0].focus();

inputs.forEach((input, index) => {

  input.addEventListener("input", (e) => {
    const value = e.target.value.replace(/\D/g, ""); // only digits
    e.target.value = value;

    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "") {
        // current empty → go to previous
        if (index > 0) {
          inputs[index - 1].focus();
          inputs[index - 1].value = "";
        }
      } else {
        // current has value → clear it
        input.value = "";
      }
    }
  });

});
