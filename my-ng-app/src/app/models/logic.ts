export class ProductInfo {
  // x is always a property name (e.g. ProductId, ProductName, etc) of the type string
  // and 'any' is that property (x) may be having 
  // any of the datatype supported by TypeScript
  [x:string]:any;
  constructor(
    public ProductRowId: number,
    public ProductId: string,
    public ProductName: string,
    public CategoryName: string,
    public Manufacturer: string,
    public Description: string,
    public BasePrice: number
  ) {}
}

export class ProductLogic {
  private products: Array<ProductInfo>;

  constructor() {
    this.products = new Array<ProductInfo>();
    this.products.push(
      new ProductInfo(
        1,
        'Prd-0001',
        'Laptop',
        'Electronics',
        'MS-ECT',
        'Gaming',
        123456
      )
    );
   
  }
  getProducts(): Array<ProductInfo> {
    return this.products;
  }
  registerProduct(prd: ProductInfo): Array<ProductInfo> {
    this.products.push(prd);
    return this.products;
  }
}
