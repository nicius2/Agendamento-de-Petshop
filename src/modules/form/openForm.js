const btnOpenForm = document.querySelector(".button")
const showForm = document.querySelector(".form-popup")

btnOpenForm.addEventListener("click", () => {
    showForm.style.display = "flex"
    // Pequeno delay para ativar
    setTimeout(() => showForm.classList.add("ativo"), 10) 
})

document.addEventListener("click", (event) => {
    if(!showForm.contains(event.target) && event.target !== btnOpenForm) {
        showForm.classList.remove("ativo");

        setTimeout(() => {
            if(!showForm.classList.contains("ativo")) {
                showForm.style.display = "none"
            }
        }, 300)
    }
})