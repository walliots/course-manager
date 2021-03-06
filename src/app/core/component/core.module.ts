import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "src/app/shared/component/404/error-404.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@NgModule({
    declarations:[
        NavBarComponent,
        Error404Component
    ],
    imports:[
        RouterModule.forChild([
            {
                //url nativa do angular
                path: '**', component: Error404Component
              }
        ])
    ],
    exports:[
        NavBarComponent
    ]
})
export class CoreModule{

}