import { makeAutoObservable } from 'mobx';

class ProductsStore {
  public products: any[] = [];

  constructor() {
    makeAutoObservable(this);
    this.changeProducts = this.changeProducts.bind(this);
  }

  changeProducts(products: any[]) {
    this.products = [...products];
  }
}

export default new ProductsStore();
