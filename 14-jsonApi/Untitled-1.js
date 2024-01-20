// Get , Post , Put  , Delete

async function getData() {
  const response = await fetch("http://localhost:4000/products");
  const result = await response.json();
  console.log(result);
}

async function postData(title, body) {
  /* const postFake = {
    titulo: document.querySelector("input")
  } */
  const response = await fetch("http://localhost:4000/products", {
    method: "POST",
    body: JSON.stringify({ title, body }),
    // (newTask)
    headers: {
      "Content-Type": "application/json",
    },
  });
  // const result = await fetch(url,options)
  const result = await response.json();
  console.log(result);
  if (result.ok) {
    console.log("sucesso");
  } else {
    console.log("falha");
  }
}
const newTask = {
  title: "",
  body: "",
};

async function putData(taskId, updateTask) {
  const response = await fetch(`http://localhost:4000/products/${taskId}`, {
    method: "PUT",
    body: JSON.stringify(updateTask),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // const result = await fetch(response,options)
  const result = await response.json();
  console.log(result);
}
async function deleteData(taskId) {
  const response = await fetch(`http://localhost:4000/products/${taskId}`, {
    method: "DELETE",
  });
}
