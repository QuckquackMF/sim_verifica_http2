import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profili, Response } from './pre.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { ListaPrenotazioniComponent } from './lista-prenotazioni/lista-prenotazioni.component';
import { DettagliComponenteComponent } from './dettagli-componente/dettagli-componente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, ListaPrenotazioniComponent, DettagliComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  fam!: Observable<Profili[]>
  profile!: Profili[];
  nuovidati!: Profili;
  data!: Object;
  loading!: boolean;
  o!: Observable<Object>
  obsPost = new Observable<Response>;

  constructor(public http: HttpClient){}

  aggiungiDati(nome: HTMLInputElement, cognome: HTMLInputElement, indirizzo: HTMLInputElement, telefono: HTMLInputElement, email: HTMLInputElement, data: HTMLInputElement, ora: HTMLInputElement) {
    const dataValue = new Date(data.value);
    this.loading = true;
   

    this.nuovidati = new Profili (nome.value, cognome.value, indirizzo.value, Number(telefono.value), email.value, dataValue , Number(ora.value));
    console.log( JSON.stringify(this.nuovidati))
    this.obsPost = this.http.post<Response>('https://my-json-server.typicode.com/QuckquackMF/http/prenotazioni', JSON.stringify(this.nuovidati));
      
    this.obsPost.subscribe(this.faicose);
  }

  faicose = (data :Response) => {
    this.data = data;
    this.loading = false;
    console.log(data)

    if(data.id > 0 )
    {
      this.profile.push(this.nuovidati);
    }

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

  makeTypedRequest() {
    this.fam = this.http.get<Profili[]>('https://my-json-server.typicode.com/malizia-g/verificaPrenotazioni/prenotazioni')
    this.fam.subscribe(data => {this.profile = data;});
  }

  ngOnInit() {
    this.makeRequest()
    this.makeTypedRequest()
  }
}

