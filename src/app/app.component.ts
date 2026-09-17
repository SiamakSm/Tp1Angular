import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EtudiantComponent, FormsModule],
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
}
