class Adress{
    constructor(city,street,neighborhood,number){
        this.city = city
        this.street = street
        this.neighborhood = neighborhood
        this.number = number
    }
    fullAdress(){
        return `My city is ${this.city}, on the street ${this.street}, in the neighborhood ${this.neighborhood}, number ${this.number}`
    }
}

module.exports = Adress