document.addEventListener("keypress",(e) =>{
    if(e.key === "Enter"){
        const btn = document.querySelector("#send")
        btn.click()
    }
})