import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrouselService {
  API_URL:string="https://pokeapi.co/api/v2/pokemon";
  constructor(private httpClient:HttpClient) { }
  getListar():Observable<any> {
    return this.httpClient.get(this.API_URL).pipe(res=>res);
  }
  getDetallePokemon(url:string):Observable<any> {
    return this.httpClient.get(url).pipe(res=>res);
  }
}

