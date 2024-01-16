class Bank {
  #balance
  constructor(firstName,guests,balance,days){
    this.firstName = firstName
    this.days = days
    this.guests = guests
    this.#balance = balance
    this.total =  days + Bank.normalPrice
  }
  static premiuFee = 200
  static normalPrice = 100
  showNormalPrice(){
    return `This is Normal Price: ${Bank.normalPrice}`
  }
  totalPay(){
    return `The payment was ${this.total}`
  }
   get balance(){
    return this.#balance
  }
  static get premiuFee(){
    return Bank.normalPrice * 2.0
  }
}
const bank1 = new Bank("Banco do Brasil",20,2000,30)
console.log(bank1)
console.log(bank1.showNormalPrice())
console.log(bank1.totalPay())
console.log(bank1.balance)
console.log(bank1.premiuFee)