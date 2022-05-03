import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
//onChanges qd se quer passar uma info pra algum componente pq assim q se receber a requisição http ele vai passar pro component e component vai identificar a alteração
export class StarComponent implements OnChanges{
    //qd se quer criar uma variavel e quer torna la disponivel para receber informação de um componente externo
    @Input()
    rating: number = 0;

    starWidth: number | undefined;


    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5;
    }

}