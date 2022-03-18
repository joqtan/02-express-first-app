const products: { title: string }[] = [];

export class Product {
  constructor(public title: string) {
    this.title = title;
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
}
