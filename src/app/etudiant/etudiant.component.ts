import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  imports: [],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent {

  @Input() nomEtu = 'BBB';
  @Input() prenomEtu = 'JJJ';
  @Input() statutEtu = "absent";

  retNomEtu() {
    return this.nomEtu;
  }
  retPrenomEtu() {
    return this.prenomEtu;
  }
}
