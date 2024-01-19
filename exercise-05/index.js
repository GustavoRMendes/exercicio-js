function showHtml(user){
  const p = document.createElement('p')
  p.id = 'user-' + user.id
  p.textContent = user.name
  document.querySelector("#users").append(p) 
}
async function showApi() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json()
  data.forEach(showHtml);
  console.log(data)
}
showApi()
async function editApi() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1",{
    method:'PUT',
    body: JSON.stringify({
      id: 11,
      user: 'Leany ',
      username:'Leandra'
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json()
  console.log(data)
  document.querySelector("#users").append(data.user,data.username)
}
editApi()
