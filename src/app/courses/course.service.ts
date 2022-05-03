import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";

@Injectable({
    providedIn: 'root'
})
export class CourseService{

    private courseUrl: string = 'http://localhost:3100/api/courses'
    //injeçao de dependencia do http
    constructor(private httpClient: HttpClient){

    }

    //TER NA CLASSE DE SERVIÇOS APENAS VARIAVEIS ESTATICAS QUE NÃO TERÃO SEU VALOR ALTERADO / O ANGULAR CRIA UMA UNICA INSTACIA DE UM OBJETO QUE PODE SER UTLIZADO EM OUTROS COMPONENTER

    // isso aqui era um metodo get
    // retrieveAll(): Course[]{
    //     return COURSES;
    // }

    retrieveAll(): Observable<Course[]>{
        return this.httpClient.get<Course[]>(this.courseUrl);
    }

    retrieveById(id: number): Observable<Course>{
        return this.httpClient.get<Course>(`${this.courseUrl}/${id}`);
    }
    save(course: Course): Observable<Course>{
        if(course.id){
            return this.httpClient.put<Course>(`${this.courseUrl}/${course.id}`, course)
        }else{
            return this.httpClient.post<Course>(`${this.courseUrl}`, course)
        }
    }
    deleteById(id: number): Observable<any>{
        return this.httpClient.delete<any>(`${this.courseUrl}/${id}`)
    }
}
