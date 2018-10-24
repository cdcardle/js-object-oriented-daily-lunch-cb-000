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
    return store.deliveries.filter(
      function(delivery){
        return delivery.neighborhoodId === this.id;
      }.bind(this)
    );
  }

  // customers() {
  //   return this.deliveries.map(
  //     function(delivery){
  //       return delivery.customer()
  //     }
  //   )
  // }
}

let mealId = 0;
class Meal {
  constructor(title, price) {
    this.id = ++mealId;
    this.title = title;
    this.price = price;

    store.meals.push(this)
  }

  // customers() {
  //   return store.customers.filter(
  //     function(customer)
  //   )
  // }
}

let customerId = 0;
class Customer {
  constructor(name, neighborhoodId) {
    this.id = ++customerId;
    this.name = name;
    if (neighborhoodId) {this.neighborhoodId = neighborhoodId;};

    store.customers.push(this)
  }

  deliveries() {
    return store.deliveries.filter(
      function(delivery){
        return delivery.customerId === this.id;
      }.bind(this)
    );
  }

  // meals() {
  //   return this.meals.map(
  //     function(meal){
  //       return meal.customers() === this
  //     }
  //   )
  // }
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

  meal() {
    return store.meals.find(
      function(meal) {
        return meal.id === this.mealId;
      }.bind(this)
    )
  }
}
