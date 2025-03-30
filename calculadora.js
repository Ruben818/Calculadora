document.addEventListener("DOMContentLoaded", () => {
    const screen = document.querySelector(".screen");
    let currentInput = "";

    // Evita que el usuario escriba directamente en la pantalla
    screen.addEventListener("keydown", (e) => e.preventDefault());

    document.querySelectorAll(".btn, .operator").forEach(button => {
        button.addEventListener("click", () => {
            if (button.value === "C") currentInput = "";
            else if (button.value === "=") {
                try { currentInput = eval(currentInput); } 
                catch { currentInput = "Error"; }
            } else {
                if (currentInput === "Error") currentInput = "";
                currentInput += button.value;
            }
            screen.value = currentInput;
        });
    });
});