import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{
   
    course: Course | undefined;

    constructor(private activateRoute: ActivatedRoute, private courseService: CourseService){ }

    ngOnInit(): void {
       this.courseService.retrieveById(Number(this.activateRoute.snapshot.paramMap.get('id'))).subscribe({
           //igualando o curso ao retorno da requisição http
           next: course => this.course = course,
           error: err => console.log('Error', err)
       });
    }
    save(): void{
        this.courseService.save(this.course!).subscribe({
            next: course => console.log('savaed with sucess', course),
            error: err => console.log('error', err)
        });
    }

}