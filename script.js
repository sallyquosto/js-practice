function printTens() {
    for (let i = 10; i <= 100; i+=10) {
        console.log(i);
    }
}

printTens()



function countUntilTens(step) {
    let i = step;
    while(true) {
        console.log(i);
        if (i % 10 === 0) {
            break;
        }
        i += step;
    }
}

countUntilTens(4)



function hasVowels(word) {
    let hasVowel = false;
    for (let letter of word) {
        if (letter === 'a') {
            hasVowel = true;
            break;
        } else if (letter === 'e') {
            hasVowel = true;
            break;
        } else if (letter === 'i') {
            hasVowel = true;
            break;
        } else if (letter === 'o') {
            hasVowel = true;
            break;
        } else if (letter === 'u') {
            hasVowel = true;
            break;
        }
    }
    return hasVowel
}

console.log(hasVowels('sally'));
console.log(hasVowels('lynn'));



function testTemperature(desiredTemp, actualTemp) {
    if (actualTemp > desiredTemp) {
        console.log("Run A/C");
    }else if (actualTemp < desiredTemp) {
        console.log("Run Heat");
    } else {
        console.log("Stand By");
    }
}

testTemperature(80,90);
testTemperature(80,70);
testTemperature(80,80);



const dealership = [
    {make: 'Toyota', model: 'Prius', year: 2020, hybrid: true, cost: 20000},
    {make: 'Toyota', model: 'Prius', year: 2021, hybrid: true, cost: 30000},
    {make: 'Ford', model: 'F-150', year: 2015, hybrid: false, cost: 25000},
    {make: 'Ferrari', model: 'Enzo', year: 2004, hybrid: false, cost: 15000},
];

function findCars(arrayOfCars, model) {
    return arrayOfCars.filter(car => car.model === model)
}

console.log(findCars(dealership, 'Prius'))
console.log(findCars(dealership, 'F-150'))
console.log(findCars(dealership, 'Enzo'))



function addCar(arrayOfCars, make, model, hybrid, cost) {
    const newCar = {make: make, model: model, year: 2020, hybrid: hybrid, cost: cost}
    arrayOfCars.unshift(newCar);
}

console.log(dealership);
addCar(dealership, 'Jeep', 'Grand Cherokee', false, 45000);
console.log(dealership)



function areThereAnyHybridCarsForSale(arrayOfCars) {
    const hybridCars = arrayOfCars.filter(car => car.hybrid);
    if (hybridCars.length > 0) {
        return true;
    }
    return false;
}

console.log(areThereAnyHybridCarsForSale(dealership))



// function findCheapestCar(arrayOfCars) {
//     let cheapestCar = arrayOfCars[0];
//     for (let car of arrayOfCars) {
//         if (car.cost < cheapestCar.cost) {
//             cheapestCar = car;
//         }
//     }
//     return cheapestCar;
// }

// console.log(findCheapestCar(dealership))