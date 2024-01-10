
function toggleButton(){
    document.body.classList.toggle("light")
    document.body.classList.toggle("dark")
}
const tooggle = document.querySelector("#toggleButton1")
tooggle.addEventListener("click",toggleButton)
