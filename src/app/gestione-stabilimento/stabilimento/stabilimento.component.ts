import { Component } from '@angular/core';

@Component({
  selector: 'app-stabilimento',
  templateUrl: './stabilimento.component.html',
  styleUrls: ['./stabilimento.component.css']
})
export class StabilimentoComponent {
  ombrelloni: any[] = [];
  cliente: string = '';
  prenotato: boolean = false;
  numeroOmbrelloneInput: number | null = null;

  constructor() {
    this.riempiOmbrelloni();
  }

  riempiOmbrelloni() {
    const ombrelloniDisponibili = 100;
    for (let i = 1; i <= ombrelloniDisponibili; i++) {
      this.ombrelloni.push({
        numeroOmbrellone: i,
        cliente: '',
        occupato: false
      });
    }
  }

  prenotaOmbrellone() {
    const ombrelloneSelezionato = this.ombrelloni.find(ombrellone => ombrellone.numeroOmbrellone === this.numeroOmbrelloneInput);
    if (ombrelloneSelezionato && !ombrelloneSelezionato.occupato && this.cliente.trim() !== '') {
      ombrelloneSelezionato.occupato = true;
      ombrelloneSelezionato.cliente = this.cliente;
      this.prenotato = true;
    } else {
      alert(`Ombrellone non disponibile o dati mancanti.`);
    }
  }

  liberaOmbrellone(ombrellone: any) {
    ombrellone.occupato = false;
    ombrellone.cliente = '';
    this.prenotato = this.ombrelloni.some(ombrellone => ombrellone.occupato); // Controlla se ci sono ancora ombrelloni occupati
  }
}
