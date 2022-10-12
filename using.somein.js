const cars = [
      {color: "green"},
      {color: "white"},
      {color: "yello"}
]

// With .some

const hasRedCar = cars.some(car => car.color == 'green')

console.log(`green: ${hasRedCar}`)