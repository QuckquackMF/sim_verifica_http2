import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profili } from '../pre.model';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-lista-prenotazioni',
  standalone: true,
  imports: [AppComponent, JsonPipe, DatePipe],
  templateUrl: './lista-prenotazioni.component.html',
  styleUrl: './lista-prenotazioni.component.css'
})
export class ListaPrenotazioniComponent implements OnInit{
  fam!: Observable<Profili[]>
  profile!: Profili[];
  
  constructor(public http: HttpClient){}
  

  makeTypedRequest() {
    this.fam = this.http.get<Profili[]>('https://my-json-server.typicode.com/malizia-g/verificaPrenotazioni/prenotazioni')
    this.fam.subscribe(data => {this.profile = data;});
  }

  ngOnInit() {
    this.makeTypedRequest()
  }
}
