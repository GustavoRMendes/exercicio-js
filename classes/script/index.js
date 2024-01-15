
class Product{
    constructor(name,description,price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    
    addStock(quantity){
        this.inStock += quantity
    }
    calculateDiscount(porcentagem){
        const valorDesconto = this.price *(porcentagem/100) 
        const valor = this.price - valorDesconto
        return this.price = valor
    }
}
const product1 = new Product("Mouse","Mouse Gamer",120)
console.log(product1)
product1.addStock(200)
product1.calculateDiscount(10)
console.log(product1)
