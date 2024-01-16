class Person {
  #balance 
  #password
  #email
  constructor(email,password,balance){
    this.#email = email
    this.#password = password
    this.#balance = balance
  }
  get email(){
    return this.#email
  }
  get password(){
    return this.#password
  }
  get balance(){
    return this.#balance
  }
  set email(newEmail){
    this.#email = newEmail
  }
  set password(newPassword){
    this.#password = newPassword
  }
  set balance(newBalance){
    this.#balance = newBalance
  }
}

const person1 = new Person("gustavormendess@gmail.com","344238",5000)
console.log(person1.password)
console.log(person1.email)
console.log(person1.balance)
person1.balance = 7000
person1.email = "gustavorodrigues2004663@gmail.com"
person1.balance = "9028382"
console.log(person1.balance)
console.log(person1.email)
console.log(person1.password)
