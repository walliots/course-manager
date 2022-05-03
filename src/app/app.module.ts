import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/component/core.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      {
        //como se ta fazendo um redirect para uma rota e não um componente precisa do pathmatch
        //url nativa do angular
        path: '', redirectTo: 'courses', pathMatch: 'full'
      }     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
