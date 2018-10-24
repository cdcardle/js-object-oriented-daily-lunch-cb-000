// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;
class Neighborhood {
  constructor(name) {
    this.id = ++neighborhoodId;
    this.name = name;

    store.neighborhoods.push(this)
  }

  deliveries() {
    store.deliveries.filter(
      (delivery) => delivery.neighborhoodId === delivery.id;
    )
  }
}

let mealId = 0;
class Meal {
  constructor(title, price) {
    this.id = ++mealId;
    this.title = title;
    this.price = price;

    store.meals.push(this)
  }
}

let customerId = 0;
class Customer {
  constructor(name, neighborhoodId) {
    this.id = ++customerId;
    this.name = name;
    if (neighborhoodId) {this.neighborhoodId = neighborhoodId;};

    store.customers.push(this)
  }
}

let deliveryId = 0;
class Delivery {
  constructor(mealId, neighborhoodId, customerId) {
    this.id = ++deliveryId;
    if (mealId) {this.mealId = mealId;};
    if (neighborhoodId) {this.neighborhoodId = neighborhoodId;};
    if (customerId) {this.customerId = customerId;};

    store.deliveries.push(this)
  }
}
