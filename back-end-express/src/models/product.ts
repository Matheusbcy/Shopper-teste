export class Product {
  constructor(
    private code: number,
    private name: string,
    private cost_price: number,
    private sales_price: number
  ) {}

  public getCode(): number {
    return this.code;
  }

  public setCode(value: number): void {
    this.code = value;
  }

  public getName(): string {
    return this.name;
  }

  public setName(value: string): void {
    this.name = value;
  }

  public getCostPrice(): number {
    return this.cost_price;
  }

  public setCostPrice(value: number): void {
    this.cost_price = value;
  }
  public getSalesPrice(): number {
    return this.sales_price;
  }

  public setSalesPrice(value: number): void {
    this.sales_price = value;
  }
}
