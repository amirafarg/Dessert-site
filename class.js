class Cart {
  constructor() {
    this.items = [];
    this.totalPrice = 0;
  }

  // إضافة منتج
  addItem(product) {
    this.items.push(product);
    this.totalPrice += product.price;
  }

  // حذف منتج بالاسم
  removeItem(productName) {
    const index = this.items.findIndex(item => item.name === productName);
    
    if (index !== -1) {
      this.totalPrice -= this.items[index].price;
      this.items.splice(index, 1);
    }
  }

  // حساب الإجمالي من الأول
  calculateTotal() {
    this.totalPrice = 0;
    this.items.forEach(item => {
      this.totalPrice += item.price;
    });
  }

  // عرض كل المنتجات
//   displayItems() {
//     console.log("Items in cart:");
//     this.items.forEach(item =>) {
//       console.log(${item.name} - $$…)}
}