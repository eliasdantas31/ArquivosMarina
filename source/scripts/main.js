const menu = document.querySelector("#menu");
const form = document.querySelector("#form");
function formWindow() {
    menu.classList.add("hidden");
    form.classList.add("display-block");
}

const sim = document.getElementById("S");
const nao = document.getElementById("N");
const optionQuestions = document.querySelector(".option-questions");

sim.addEventListener("change", () => {
    if (sim.checked) {
        optionQuestions.style.display = "flex";
    }
});

nao.addEventListener("change", () => {
    if (nao.checked) {
        optionQuestions.style.display = "none";
    }
});
