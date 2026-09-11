import { Component } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  imports: [],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent {
  
  retNomEtu() {
    return 'Bon';
  }
  retPrenomEtu() {
    return 'Jean';
  }

  nomEtu = 'John';
  prenomEtu = 'Wick';
}
