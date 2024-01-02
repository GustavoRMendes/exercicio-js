// Fetch

fetch("https://api.github.com/users/GustavoRMendes",{
    method: "POST",
    body:JSON.stringify({
      name:"Gustavo"  
    }),
})
.then(resolve => console.log(resolve.json()))
    .then(data => console.log(data))
   