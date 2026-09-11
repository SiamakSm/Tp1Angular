import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EtudiantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Module Champ d\'applications';
  resume = 'Prise en main d\'Angular, première application';
  estAuth = false;
}
