import { Component, Input } from '@angular/core';
import { Profili } from '../pre.model';
import { JsonPipe, DatePipe } from '@angular/common';
import { DettagliComponenteComponent } from '../dettagli-componente/dettagli-componente.component';

@Component({
  selector: 'app-lista-prenotazioni',
  standalone: true,
  imports: [JsonPipe, DatePipe, DettagliComponenteComponent],
  templateUrl: './lista-prenotazioni.component.html',
  styleUrl: './lista-prenotazioni.component.css'
})
export class ListaPrenotazioniComponent {
  @Input() profile!: Profili[];
  selectedProfile!: Profili;

  showDetails(profile: Profili): void {
    this.selectedProfile = profile;
  }
}