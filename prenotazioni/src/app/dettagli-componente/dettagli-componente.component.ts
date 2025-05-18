import { Component, Input } from '@angular/core';
import { Profili } from '../pre.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dettagli-componente',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './dettagli-componente.component.html',
  styleUrl: './dettagli-componente.component.css'
})
export class DettagliComponenteComponent {
  @Input() selectedProfile!: Profili;
}
