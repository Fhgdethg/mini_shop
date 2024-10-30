import { makeAutoObservable } from 'mobx';

class BasketStore {
  public basketProducts: any[] = [];

  get totalPrice() {
    return this.basketProducts.reduce(
      (total, product) => total + product.price,
      0
    );
  }

  constructor() {
    makeAutoObservable(this);
    this.addProductToBasket = this.addProductToBasket.bind(this);
    this.removeProductFromBasket = this.removeProductFromBasket.bind(this);
  }

  addProductToBasket(product: any) {
    this.basketProducts = [...this.basketProducts, product];
  }

  removeProductFromBasket(productID: number) {
    const index = this.basketProducts.findIndex(
      (product) => product.id === productID
    );

    if (index !== -1) {
      this.basketProducts.splice(index, 1);
      this.basketProducts = [...this.basketProducts];
    }
  }
}

export default new BasketStore();
