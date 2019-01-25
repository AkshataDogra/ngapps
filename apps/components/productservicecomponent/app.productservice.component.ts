import { Component, OnInit } from '@angular/core';
import { Product, Categories } from "./app.product.model";
import { ProductService } from "./../../services/app.product.service";
import { Response } from "@angular/http";

@Component({
    selector: 'app-productservice-component',
    templateUrl: './app.product.view.html'
})
export class ProductServiceComponent implements OnInit {

    product: Product;
    products: Array<Product>;
    categories = Categories;
    tableHeaders: Array<string>;

    constructor(private serv: ProductService) { 
        this.product = new Product ("", 0, "", "", "",0);
        this.products = new Array<Product> ();
        this.tableHeaders = new Array<string> ();
    }
    //this method will be invoked immediately after ctor.
    ngOnInit(): void {
        //read all properties of Product class and push them in tableHeaders array
        for (let p in this.product) {   //workd like object.keys
            this.tableHeaders.push (p);
        }

        //make a call to REST API and get data
        this.serv.getData ().subscribe (
            (resp: Response) => {
                this.products = resp.json ().data;
                console.log (resp.json ().data);
            },
            error => {
                console.log (`Error Occured ${error}`);
            }
        );
     }

    clear (): void {
        this.product = new Product ("", 0, "", "", "", 0);
    }

    save(): void {
        console.log(JSON.stringify(this.product));
        this.serv.postData (this.product).subscribe (
            (resp: Response) => {
                this.products.push( resp.json ().data);
                console.log (resp.json ().data);
            },
            error => {
                console.log (`Error Occured ${error}`);
            }
        );
    }

    delete(): void {
        console.log(JSON.stringify(this.product));
        this.serv.deleteData (this.product.ProductId).subscribe (
            (resp: Response) => {
                this.products.push( resp.json ().data);
                console.log (resp.json ().data);
            },
            error => {
                console.log (`Error Occured ${error}`);
            }
        );
    }

    getselectedrow (p:Product) {
        //1. Create a deep copy of the selected product
        //2. Assign that copy to this.product
        this.product = Object.assign ({}, p);
    }
}
