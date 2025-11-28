export class Product {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;

  constructor(id: number = 0, name: string = '', price: number = 0, url: string = '', description: string = '') {
    this.id = id;
    this.name = name;
    this.price = price;
    this.url = url;
    this.description = description;
  }
}