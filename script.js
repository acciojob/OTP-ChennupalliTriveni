const inputs = document.querySelectorAll(".code");

inputs[0].focus();

inputs.forEach((input, index) => {

    input.addEventListener("input", (e) => {
        const val = e.target.value;

        if (!/^[0-9]$/.test(val)) {
            input.value = "";
            return;
        }

        if (index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {

            if (input.value === "") {
                if (index > 0) {
                    inputs[index - 1].focus();
                    inputs[index - 1].value = "";
                }
            } else {
                input.value = "";
            }
        }
    });

});
