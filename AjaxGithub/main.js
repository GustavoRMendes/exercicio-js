async function dados(){

    const url = await (await fetch("https://api.github.com/users/GustavoRMendes")).json()

    console.log(url)
}

dados()