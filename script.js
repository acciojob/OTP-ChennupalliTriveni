const inputs = document.querySelectorAll(".code");

// Auto move + only numbers allowed
inputs.forEach((input, index) => {

  input.addEventListener("input", () => {
    input.value = input.value.replace(/[^0-9]/g, "");

    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  // Backspace → previous input
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !input.value && index > 0) {
      inputs[index - 1].focus();
    }
  });
});

// Paste complete OTP
inputs[0].addEventListener("paste", (e) => {
  const text = e.clipboardData.getData("text").replace(/\D/g, "");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = text[i] || "";
  }
});
