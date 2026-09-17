import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EtudiantComponent, FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Module Champ d\'applications';
  resume = 'Prise en main d\'Angular, première application';
  estAuth = false;

  commentaireSeance = ''
  constructor() {
    setTimeout(() => {
      this.estAuth = true;
    }, 3000);
  }
  rendTousPres() {
    console.log(' tous present ');
  }

  tableauEtu = [
    {
      nomEtu: 'Jean',
      prenomEtu: 'Dupont',
      statutEtu: "absent",
    },
    {
      nomEtu: 'Marie',
      prenomEtu: 'Martin',
      statutEtu: "présent",
    },
    {
      nomEtu: 'Paul',
      prenomEtu: 'Bernard',
      statutEtu: "absent",
    },
    {
      nomEtu: 'Marie',
      prenomEtu: 'Martin',
      statutEtu: "présent",
    },
    {
      nomEtu: 'Paul',
      prenomEtu: 'Bernard',
      statutEtu: "absent",
    },
    {
      nomEtu: 'Soroush',
      prenomEtu: 'Abdoli',
      statutEtu: "présent",
    },
    {
      nomEtu: 'Ali',
      prenomEtu: 'Mousavian',
      statutEtu: "absent",
    }
  ]

}