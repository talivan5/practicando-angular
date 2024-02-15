import { Component, OnInit } from '@angular/core';
import { CarrouselService } from '../../service/carrousel.service';
import { PokemonInterface } from '../../interfaces/carrousel.interface';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent implements OnInit{
  pokemonLista: PokemonInterface[]=[];
  detallePokemon:any=[];
  constructor(private carrouselService:CarrouselService){

  }
  ngOnInit(): void {
    this.getPokemons()
  }
  getPokemons() {
    this.carrouselService.getListar().subscribe({
      next: data => {
        console.log(data.results)
        this.pokemonLista = data.results;
      },
      error: error => {
        console.log(error)
      }
    });
  }
  mostrar(url:any) {
    console.log(url);
    this.carrouselService.getDetallePokemon(url).subscribe({
      next: data => {
        console.log(data)
        this.detallePokemon = data;
      },
      error: error => {
        console.log(error)
      }
    })
  }

}
