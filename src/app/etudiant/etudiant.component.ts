import { Component, Input } from '@angular/core';
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-etudiant',
  imports: [NgIf, NgStyle],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent {

  @Input() nomEtu = 'BBB';
  @Input() prenomEtu = 'JJJ';
  @Input() statutEtu = "absent";
  @Input() commentaireSeance = "";


  retNomEtu() {
    return this.nomEtu;
  }
  retPrenomEtu() {
    return this.prenomEtu;
  }

  getColorEtu() {
    return this.statutEtu == 'absent' ? 'red' : 'green';
  }
}
