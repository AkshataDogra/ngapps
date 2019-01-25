export class Product{
    
    constructor (
        public ProductId: number,
        public ProductName: string,
        public CategoryName: string,
        public Price: number,
        public Flag: boolean
    ) {}
}

export const Categories = ["Electronics", "Electrical", "Food"];
export const Products:Array<Product> = new Array<Product>();
Products.push (new Product (101, "Laptop", "Electronics", 120000, false));
Products.push (new Product (102, "Iron", "Electrical", 1200, false));
Products.push (new Product (103, "Biscuits", "Food", 120, false));