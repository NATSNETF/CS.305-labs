function Car(name,manufacturer,fuelType,bodyType,seatingCapacity,price){
    this.name = name;
    this.manufacturer = manufacturer;
    this.fuelType = fuelType;
    this.bodyType = bodyType;
    this.seatingCapacity = seatingCapacity;
    this.price = price;
}
//

let tataTiago = new Car("Tata Tiago","Tata","petrol","hatchback",5,5000)
let nexon = new Car("Tata Nexon","Tata","diesel","SUV",5,7000)
let mahindra = new Car("Mahindra XUV700","Mahindra","petrol","SUV",5,7500)
let mg =new Car("MG ZS EV","Mahindra","Electric","SUV",5,25000)
let volvo =new Car("Volvo XC90","Volvo","petrol","hybrid",7,35000)


let list = [tataTiago,nexon,mahindra,mg,volvo]

function getpetrolCarsWithPrice(list,price){
   return list.filter((car)=>car.fuelType=="petrol" && car.price < price)
}
console.log(getpetrolCarsWithPrice(list,35000));


