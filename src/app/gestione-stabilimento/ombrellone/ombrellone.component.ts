import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ombrellone',
  templateUrl: './ombrellone.component.html',
  styleUrls: ['./ombrellone.component.css']
})
export class OmbrelloneComponent {
  @Input() numeroOmbrellone: number = 0;
  @Input() occupato: boolean = false;
  @Input() cliente: string = '';
  @Output() prenota: EventEmitter<string> = new EventEmitter<string>();
  @Output() libera: EventEmitter<void> = new EventEmitter<void>();

  clienteClicked = false;
  numeroInput: string = '';
  prenotazione() {
    if (this.numeroInput !== '' && typeof this.cliente === 'string') {
      this.prenota.emit(this.cliente);
    } else {
      alert("Inserisci il numero dell'ombrellone e il nome del cliente prima di prenotare.");
    }
  }
  
    handleClick(numeroInput: number) {
      if (numeroInput === this.numeroOmbrellone)  {
      if (!this.occupato && this.cliente !== '') {
        // Ombrellone disponibile, lo prenota
        this.occupato = true;
        console.log(`Ombrellone ${this.numeroOmbrellone} prenotato da ${this.cliente}`);
        this.prenota.emit(this.cliente);
      } else if (this.occupato) {
        // Ombrellone già occupato
        this.liberaPosto();
      } else {
        // Cliente mancante
        alert("Inserisci il nome del cliente");
      }
    } else {
      // Numero ombrellone non corrispondente
      alert("Assegna il posto o il numero ombrellone correttamente");
    }
  }

  handleClienteClick() {
    this.clienteClicked = true;
  }

  liberaPosto() {
    alert(`Stai cancellando la prenotazione per l'ombrellone ${this.numeroOmbrellone}`);
    this.occupato = false;
    this.cliente = "";
    this.libera.emit();
  }
}