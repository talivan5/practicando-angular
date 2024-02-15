import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarrouselComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pruebas';
}
