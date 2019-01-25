export class Product{
    
    constructor (
        public __id: string,
        public ProductId: number,
        public ProductName: string,
        public CategoryName: string,
        public Manufacturer: string,
        public Price: number
    ) {}
}

export const Categories = ["Electronics", "Electrical", "Food"];
export const Products:Array<Product> = new Array<Product>();
// Products.push (new Product (101, "Laptop", "Electronics", "HP", 120000));
// Products.push (new Product (102, "Iron", "Electrical", "Prestige",1200));
// Products.push (new Product (103, "Biscuits", "Food", "ParleG",120));