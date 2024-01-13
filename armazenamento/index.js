const buttonGetInformation = document.querySelector("#sessionBtn");
buttonGetInformation.addEventListener('click',() => {
    const input = document.querySelector("#session")
    sessionStorage.setItem('information',input.value)
    input.value = ''
})

const buttonRead = document.querySelector("#readSesssion").addEventListener('click',() => {
    const information = sessionStorage.getItem('information')
    alert("Meu nome é " + information)
})

const buttonLocalBtn = document.querySelector("#localBtn").addEventListener("click", () => {
    const input = document.querySelector("#local")
    localStorage.setItem("texto",input.value)
    input.value = ''
})

document.querySelector("#readLocal").addEventListener("click",() => {
    const textoInformado = localStorage.getItem("texto")
    alert("O meu texto digitado no input foi " + textoInformado)
})

document.getElementById('cookieBtn').addEventListener('click', function () {
    const input = document.getElementById('cookie')
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2022,9, 9) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
  })