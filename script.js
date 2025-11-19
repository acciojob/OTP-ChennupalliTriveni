const inputs = document.querySelectorAll(".code");

inputs[0].focus();

inputs.forEach((input, index) => {
  
  input.addEventListener("input", () => {
    let value = input.value;

    // Accept only digits
    input.value = value.replace(/\D/g, "");

    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "" && index > 0) {
        inputs[index - 1].focus();
        inputs[index - 1].value = "";
      }
    }
  });
});
