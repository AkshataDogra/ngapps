import { Component, OnInit } from '@angular/core';
import { Product, Categories } from "./app.product.model";
import { ProductLogic } from "./app.product.logic";
import { stringify } from 'querystring';

@Component({
    selector: 'app-product-component',
    templateUrl: './app.product.view.html'
})
export class ProductComponent implements OnInit {
    //The OnInit is the Component lifecycle Interface
    //this provides ngOnInint() method
    product: Product;
    private logic: ProductLogic;
    products: Array<Product>;
    //categories locally
    categories = Categories;
    tableHeaders: Array<string>;

    constructor() { 
        this.product = new Product (0, "", "", 0);
        this.logic = new ProductLogic ();
        this.products = new Array<Product> ();
        this.tableHeaders = new Array<string> ();
    }
    //this method will be invoked immediately after ctor.
    ngOnInit(): void {
        //read all properties of Product class and push them in tableHeaders array
        for (let p in this.product) {   //workd like object.keys
            this.tableHeaders.push (p);
        }
        this.products = this.logic.getProducts();
     }

    clear (): void {
        this.product = new Product (0, "", "", 0);
    }

    save(): void {
        this.products = this.logic.saveProduct (this.product);
        //alert (JSON.stringify (this.products)); 
    }

    getselectedrow (p:Product) {
        //1. Create a deep copy of the selected product
        //2. Assign that copy to this.product
        this.product = Object.assign ({}, p);
    }
}
