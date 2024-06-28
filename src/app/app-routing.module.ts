import { NavbarComponent } from './gestione-stabilimento/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StabilimentoComponent } from './gestione-stabilimento/stabilimento/stabilimento.component';
// Assicurati di impostare il percorso corretto al tuo componente Navbar

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: StabilimentoComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
