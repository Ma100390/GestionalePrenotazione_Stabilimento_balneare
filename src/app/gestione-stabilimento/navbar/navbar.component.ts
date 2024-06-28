import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isAuthenticated: boolean = false;
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login(event: Event) {
    // Verifica che l'utente abbia inserito username e password
    if (!this.username || !this.password) {
      console.error('Inserisci username e password.');
      return;
    }

    // Esegui la richiesta POST al server per verificare le credenziali dell'utente
    this.http.post<any>('http://localhost:3000/login', { username: this.username, password: this.password }).subscribe(
      (response) => {
        // Se l'autenticazione ha successo, imposta isAuthenticated a true e aggiorna le informazioni sull'utente
        this.isAuthenticated = true;
        this.username = response.username;

        // Reindirizza l'utente alla dashboard dopo il login
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Se l'autenticazione fallisce, mostra un messaggio di errore all'utente
        console.error('Errore durante l\'autenticazione', error);
        // Puoi anche visualizzare un messaggio di errore all'utente nell'interfaccia utente
      }
    );
  }

  logout() {
    // Esegui qui la logica per il logout
  
    // Reindirizza l'utente alla pagina di login dopo il logout
    this.router.navigate(['/login']);
  
    // In questo esempio, impostiamo isAuthenticated a false per simulare il logout
    this.isAuthenticated = false;
    this.username = '';
    this.password = ''; // Correggi "this. Password" in "this. password"
  }
  
}
