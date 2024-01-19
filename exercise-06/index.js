function showData(dbData){
  const p = document.createElement("p")
  p.id = 'p-' + dbData.id
  p.textContent = dbData.task
  const section = document.querySelector("#list")
  section.append(p)
}
async function dataJsonServer(){
  const response = await fetch("http://localhost:3000/tarefas")
  const data = await response.json()
  data.forEach(showData);
}
const form = document.querySelector("form")
form.addEventListener('submit',async (evt) => {
  evt.preventDefault()
  const task = {
    task: document.querySelector("#task").value
  }
  const response = await fetch("http://localhost:3000/tarefas",{
    method:"POST",
    body:JSON.stringify(task),
    headers:{
      "Content-Type":"application/json"
    }
  })
  const result = await response.json()
  form.reset()
  document.querySelector("#list").append(result.task)
})

dataJsonServer()

/*const response = await fetch("http://localhost:3000/tarefas/1",{
method:"DELETE"

const response = await fetch("http://localhost:3000/tarefas/1",{
    method:"PUT",
    body:JSON.stringify(task),
    headers:{
      "Content-Type":"application/json"
    }
  })
*/