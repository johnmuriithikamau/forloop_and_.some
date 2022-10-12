const cars = [
      {color: "red"},
      {color: "green"},
      {color: "blue"}
]

//without .some

let hasRedCar = false;
for (const car of cars) {
      if (car.color == 'red') {
            hasRedCar = true;
            break;
      }
}

console.log(`red: ${hasRedCar}`)