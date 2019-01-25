import {Component} from "@angular/core";
import { template } from "@angular/core/src/render3";
import { url } from "inspector";

@Component ({      //to make the class as NG Component
    selector: "app-simple-component",
    template: `
    <input type="text" class="form-control" id="var1"/>
    <input type="text" class="form-control" id="var2"/>
    <input type = "button" class="btn-success" value="+" (click)="add()" />
    <br /> <br /> <br />
    <input type="text" class="form-control" [(ngModel)]="var3" />
    `    
})  
export class SimpleComponent {
    // message: string;    //default access specifier for class is public
    // name: string;
    // url: string;
    // fullName: string;

    // constructor() {
    //     this.message = "Hello Angular 7...";
    //     this.name = "ASD";
    //     this.url = "http://www.devcurry.com";
    // }

    // print(): void {
    //     this.message = "Button Clicked !!!";
    // }

    var1: number ;//= (parseInt((document.getElementById("var1") as HTMLInputElement).value));
    var2: number ;//= (parseInt((document.getElementById("var2") as HTMLInputElement).value));
    var3: number;

    add() {
        this.var3 = parseInt((<HTMLInputElement>document.getElementById("var1")).value) +
        parseInt((<HTMLInputElement>document.getElementById("var2")).value);
        
    }
    
    
    sub() {
        this.var3 = parseInt((<HTMLInputElement>document.getElementById("var1")).value) +
        parseInt((<HTMLInputElement>document.getElementById("var2")).value);
    }
    
}