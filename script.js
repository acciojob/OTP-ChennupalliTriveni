const inputs = document.querySelectorAll(".otp-inputs input");

inputs.forEach((input, index) => {

    // Move forward automatically
    input.addEventListener("input", () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    // Move backward using Backspace
    input.addEventListener("keydownconst inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {

    // Move forward automatically
    input.addEventListener("input", () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    // Move backward with Backspace
    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && input.value === "" && index > 0) {
            inputs[index - 1].focus();
        }
    });

});", (e) => {
        if (e.key === "Backspace" && input.value === "" && index > 0) {
            inputs[index - 1].focus();
        }
    });

});