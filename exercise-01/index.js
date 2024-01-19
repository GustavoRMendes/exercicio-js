const form = document.querySelector("#form");
const inputName = document.querySelector("#firstName");
const inputEmail = document.querySelector("#email").value;
const inputPassword = document.querySelector("#password").value;


form.addEventListener("submit",(event) => {
  event.preventDefault()
  try {
    validationEmail(inputEmail)
    validatePassword(inputPassword)
} catch (err) {
   console.log( err.message)
  }
})


function validationEmail(inputEmail){
  if (!inputEmail.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
    const err = new Error('Email inválido.')
    err.input = 'email'
    throw err
}
}




function validatePassword(inputPassword) {
  if (
      inputPassword.length < 8 || 
      !inputPassword.match(/[a-z]/) || 
      !inputPassword.match(/[A-Z]/) || 
      !inputPassword.match(/[0-9]/) ||
      !inputPassword.match(/[^a-zA-Z0-9\s]/)
  ) {
      const err = new Error('Senha inválida.')
      err.input = 'inputPassword'
      throw err
  }
}
