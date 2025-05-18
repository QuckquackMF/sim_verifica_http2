import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profili } from './pre.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { ListaPrenotazioniComponent } from './lista-prenotazioni/lista-prenotazioni.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, ListaPrenotazioniComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  profile!: Profili[];
  nuovidati!: Profili;
  data!: Object;
  loading!: boolean;
  o!: Observable<Object>

  constructor(public http: HttpClient){}

  aggiungiDati(nome:HTMLInputElement, cognome: HTMLInputElement, indirizzo: HTMLInputElement, telefono: HTMLInputElement, email: HTMLInputElement, data: HTMLInputElement, ora: HTMLInputElement) {
    const dataValue = new Date(data.value);
    
    this.nuovidati = new Profili(nome.value, cognome.value, indirizzo.value, parseInt(telefono.value), email.value, dataValue, parseFloat(ora.value))
  }

  makeRequest(): void {
    this.loading = true;
    this.o = this.http.get('https://my-json-server.typicode.com/malizia-g/verificaPrenotazioni/prenotazioni')
    this.o.subscribe(this.getData)
  }

  getData = (d: Object) => 
  {
    this.data = d;
    this.loading = false;
    console.log(this.data);
  }

  ngOnInit() {
    this.makeRequest()
  }
}

