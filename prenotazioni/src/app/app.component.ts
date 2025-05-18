import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profili } from './pre.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Profili],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  profile!: Profili[];
  nuovidati!: Profili;

  aggiungiDati(nome:HTMLInputElement, cognome: HTMLInputElement, indirizzo: HTMLInputElement, telefono: HTMLInputElement, email: HTMLInputElement, data: HTMLInputElement, ora: HTMLInputElement) {
    const dataValue = new Date(data.value);
    
    this.nuovidati = new Profili(nome.value, cognome.value, indirizzo.value, parseInt(telefono.value), email.value, dataValue, parseFloat(ora.value))
  }
}

