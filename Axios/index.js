// get axios

axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => console.log(response.data))

// POST axios
const data = {
    title:"titulo",
    content:"conteudo",
    userID:1,
}
axios.post("https://jsonplaceholder.typicode.com/posts",data).then((response) => console.log(response.data))



