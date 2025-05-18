import { Component, Input } from '@angular/core';
import { Profili } from '../pre.model';
import { JsonPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-lista-prenotazioni',
  standalone: true,
  imports: [JsonPipe, DatePipe],
  templateUrl: './lista-prenotazioni.component.html',
  styleUrl: './lista-prenotazioni.component.css'
})
export class ListaPrenotazioniComponent {
  @Input() profile!: Profili[];
}