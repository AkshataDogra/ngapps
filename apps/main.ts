//1. Angular Module File
import { NgModule } from "@angular/core";

//1. Import all standard modules
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

//2. Import all components and directives
import {SimpleComponent} from "./components/simplecomponent/app.simple.component";
import { ProductComponent } from "./components/productcomponent/app.product.component";
import { ProductFormComponent } from "./components/productformcomponent/app.productform.component";
import { SampleServiceComponent } from "./components/sampleservicecomponent/app.sample.service.component";
import { ProductServiceComponent } from "./components/productservicecomponent/app.productservice.component";

//3. Import all services
import { SampleService } from "./services/app.sample.service";
import { ProductService } from "./services/app.product.service";

@NgModule({     //to make a class as NG Module
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule],
    declarations: [SimpleComponent, ProductComponent, ProductFormComponent, SampleServiceComponent, ProductServiceComponent],
    providers: [SampleService, ProductService],
    bootstrap: [ProductServiceComponent]
})
export class AppModule {}

//Making the AppModule as Bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);