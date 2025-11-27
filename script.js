const inputs = document.querySelectorAll(".code-container .code");

inputs.forEach((input, index) => {

    input.addEventListener("input", () => {
        
        // Allow only digits
        input.value = input.value.replace(/[^0-9]/g, "");

        // Move to next input if current has a value
        if (input.value !== "" && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {

        // Backspace: move to previous input if current is empty
        if (e.key === "Backspace" && input.value === "" && index > 0) {
            inputs[index - 1].focus();
        }
    });

});