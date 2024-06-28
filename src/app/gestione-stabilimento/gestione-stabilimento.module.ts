import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StabilimentoComponent } from './stabilimento/stabilimento.component';
import { OmbrelloneComponent } from './ombrellone/ombrellone.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule


@NgModule({
  declarations: [
    StabilimentoComponent,
    OmbrelloneComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [StabilimentoComponent, OmbrelloneComponent, NavbarComponent]
})
export class GestioneStabilimentoModule { }
