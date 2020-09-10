// Корзина

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];
      if (productName === name) {
        console.log('нашли такой продукт', productName);
        console.log('индекс: ', i);

        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    console.log(this.items);

    const { items } = this;

    let total = 0;

    for (const { price, quantity } of items) {
      console.log(price);
      total += price * quantity;
    }
    return total;
  },
};

console.log(cart.getItems());

cart.add({ name: 'Apple', price: 50 });
cart.add({ name: 'grapes', price: 60 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'stawberry', price: 110 });
cart.add({ name: 'stawberry', price: 110 });
cart.add({ name: 'grapes', price: 60 });
cart.add({ name: 'stawberry', price: 110 });
cart.add({ name: 'stawberry', price: 110 });

console.table(cart.getItems());

console.log('Toral: ', cart.countTotalPrice());

cart.remove('grapes');
console.table(cart.getItems());

cart.clear();
console.log(cart.getItems());

console.log('Toral: ', cart.countTotalPrice());
