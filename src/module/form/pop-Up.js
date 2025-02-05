const buttonOpenForm = document.querySelector("button")
const forms = document.querySelector(".form-popup")
const closeButton = document.querySelector(".close")

// Open the form
buttonOpenForm.addEventListener("click", () => {
    forms.style.display = "flex"
    
    // opening animation
    setTimeout(() => forms.classList.add("ativo"), 10);
})

// Close the form
document.addEventListener("click", (event) => {
    if (!forms.contains(event.target) && event.target !== buttonOpenForm) {
        forms.classList.remove("ativo")

        // closing animation
        setTimeout(() => {
            if (!forms.classList.contains("ativo")) {
                forms.style.display = "none";
            }
        }, 300);
    }
})


closeButton.addEventListener("click", () => {
    forms.style.display = "none"
})


