class Cart {
  constructor() {
    this.item = [];
    this.totalPrice = 0;
  }

  // إضافة منتج
  addItem(product) {
    this.item.push(product);
    this.totalPrice += product.price;
  }

  // حذف منتج بالاسم
  removeItem(productName) {
    const index = this.item.findIndex(item => item.name === productName);
    
    if (index !== -1) {
      this.totalPrice -= this.item[index].price;
      this.item.splice(index, 1);
    }
  }

  // حساب الإجمالي من الأول
  calculateTotal() {
    this.totalPrice = 0;
    this.item.forEach(item => {
      this.totalPrice += item.price;
    });
  }

  // عرض كل المنتجات
  displayItems() {
    console.log("Items in cart:");
    this.item.forEach(item => {
      console.log(`${item.name} - $${item.price}`);
    });
  }
}

const cart = new Cart();

// cart.addItem({ name: "waffle", price: 6.50});
// cart.addItem({name: 'vanilla bean', price: 7.00});
// cart.addItem({name: 'Macaron mix of five', price: 8.00});
// cart.addItem({name: 'Classic tiramisu', price: 5.50});
// cart.addItem({name: 'Pistachio baklava', price: 4.00});
// cart.addItem({name: 'Lemon meringue', price: 5.00});
// cart.addItem({name: 'Red velvet', price: 4.50});
// cart.addItem({name: 'Salated caramel', price: 4.50});
// cart.addItem({name: 'vanilla panna', price: 6.50});

cart.displayItems();

console.log("Total:", cart.totalPrice);

cart.removeItem("vanilla bean");

cart.displayItems();
console.log("Total after remove:", cart.totalPrice);