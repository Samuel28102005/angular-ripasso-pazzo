import { Component } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  pokemons!:string;

  constructor(public http:httpclient){

  }
  cerca(pokemon:HTMLInputElement):void{
    this.pokemons= pokemon.value;


  }
}
