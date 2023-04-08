// You are given an array of car objects, each with a "name" and "topSpeed" property. You also have a river object with a "name" and "currentSpeed" property. Write a function that takes in the car array and river object as arguments and returns the name of the car with the highest net speed (topSpeed - currentSpeed) across the river.

const cars = [
  {
    name: "Bugatti Chiron ",
    topSpeed: 261,
  },
  {
    name: "SSC Tuatara",
    topSpeed: 316,
  },
  {
    name: "Bugatti Chiron ",
    topSpeed: 261,
  },
  {
    name: "Ferrari 812 Superfast",
    topSpeed: 211,
  },
  {
    name: "McLaren 720S",
    topSpeed: 212,
  },
  {
    name: "Nissan GT-R Nismo",
    topSpeed: 205,
  },
];

const river = { name: "rupsha", currentSpeed: "30" };
function findFastCarOnRiver(cars, river) {
  let fastestSpreed = 0;
  let fastestCar = {};

  cars.forEach((car) => {
    const netSpeed = car.topSpeed - river.currentSpeed;

    if (netSpeed > fastestSpreed) {
      fastestSpreed = netSpeed;
      fastestCar = car;
    }
  });

  return `${fastestCar.name}- ${fastestCar.topSpeed}mph`;
}

console.log(findFastCarOnRiver(cars, river));

// You have an array of shopping items, each with a "name" and "price" property. You also have a budget limit. Write a function that takes in the shopping array and budget as arguments and returns the total price of the items that fit within the budget.

const shoppingItems = [
  {
    name: "yogurt",
    price: 100,
  },
  {
    name: "apple",
    price: 200,
  },
  {
    name: "cheese",
    price: 500,
  },
  {
    name: "Bread",
    price: 40,
  },
  {
    name: "pasta",
    price: 200,
  },
];
const budgetLimition = 100;

function calculatePrice(shoppingItems, budgetLimition) {
  let totalPrice = 0;

  for (let i = 0; i < shoppingItems.length; i++) {
    if (shoppingItems[i].price <= budgetLimition) {
      totalPrice += shoppingItems[i].price;
    }
  }
  return totalPrice;
}

console.log(calculatePrice(shoppingItems, budgetLimition));

// 03. You are given an array of numbers. Write a function that takes in this array and another function as inputs. The input function should perform a transformation (double each element etc.) on each element in the array. The main function should then return the transformed array.

const num = [2, 43, 45, 23, 6, 45, 90, 88, 61, 33];

function double(num) {
  return num * 2;
}

function transformArray(num, double) {
  const transformedArray = [];

  for (let i = 0; i < num.length; i++) {
    transformedArray.push(double(num[i]));
  }
  return transformedArray;
}

console.log(transformArray(num, double));
