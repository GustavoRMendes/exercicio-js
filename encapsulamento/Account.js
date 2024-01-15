// Encapsulamento
class Account {
  #password;
  #balance = 0;
  constructor(email, password) {
    this.email = user.email;
    this.#password = user.password;
  }
  getUser(email,password) {
    if (this.#verification(email,password)) {
      return this.#balance;
    } else {
      return null;
    }
  }
  #verification(email, password) {
    return this.email === email && this.#password === password;
  }
}

const user = {
  email: "gustavormendess@gmail.com",
  password: "Eli040177",
  balance: 0,
};
const myAccount = new Account(user);
console.log(myAccount.getUser("gustavormendess@gmail.com", "Eli040177"));
console.log(myAccount)
