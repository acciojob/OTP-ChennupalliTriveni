const inputs = document.querySelectorAll(".code");

inputs[0].focus();

inputs.forEach((input, index) => {
    
    input.addEventListener("input", (e) => {
        const value = e.target.value;

        // Only allow digits
        if (!/^[0-9]$/.test(value)) {
            e.target.value = "";
            return;
        }

        // Move to next box if exists
        if (value !== "" && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {

        // Handle Backspace Key
        if (e.key === "Backspace") {
            if (input.value === "") {
                // go to previous field
                if (index > 0) {
                    inputs[index - 1].focus();
                    inputs[index - 1].value = "";
                }
            } else {
                // Delete current digit
                input.value = "";
            }
        }
    });

});
