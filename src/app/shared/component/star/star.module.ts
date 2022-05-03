import { NgModule } from "@angular/core";
import { StarComponent } from "./star.component";

@NgModule({
    declarations: [
        StarComponent
    ],
    // torna disponivel para outros modulos
    exports: [
        StarComponent
    ]
})
export class StarModule{

}