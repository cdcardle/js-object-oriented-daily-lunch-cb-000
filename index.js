// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;
class Neighborhood {
  constructor(name) {
    this.id = ++neighborhoodId;
    this.name = name;
  }
}

let mealId = 0;
class Meal {
  constructor(title, price) {
    this.id = ++mealId;
    this.title = title;
    this.price = price;
  }
}

let customerId = 0;
class Customer {
  constructor(name, neighborhood) {
    this.id = ++customerId;
    this.name = name;
    if (neighborhood) {
      this.neighborhoodId = neighborhood.id;
    };
  }
}

let deliveryId = 0;
class Delivery {
  constructor(meal, neighborhood, customer) {
    if (meal) {this.mealId = meal.id;};
    if (neighborhood) {this.neighborhoodId = neighborhood.id;};
    if (customer) {this.customerId = customer.id;};
  }
}
