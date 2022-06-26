var faker = require("faker");
var database = { products: [], menus: [] };
for (var i = 1; i <= 50; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl:
      "https://source.unsplash.com/1600x900/?food=" +
      Math.ceil(Math.random() * 1000),
    quantity: faker.datatype.number(),
  });
}

for (var i = 10000; i <= 10050; i++) {
  database.menus.push({
    id: i,
    menu_name: faker.commerce.productName(),
    menu_description: faker.lorem.sentences(),
    menu_size: faker.datatype.number({ max: 10 }),
    cost: faker.commerce.price(),
    imageUrl:
      "https://source.unsplash.com/1600x900/?food=" +
      Math.ceil(Math.random() * 1000),
  });
}
console.log(JSON.stringify(database));
