class User { 
  constructor(fullname,email,password){
    this.fullname = fullname
    this.email = email
    this.password = password
  }
  login(email,password){
    if(email === this.email && password === this.password){
        return 'Login bem sucedido'
    }else{
        return 'Mal sucedido'
    }
    
  }
}
const user1 = new User("Gustavo Mendes","gustavors@gmail.com","3887!")
console.log(user1)
console.log(user1.login("gustavors@gmail.com","3887!"))
