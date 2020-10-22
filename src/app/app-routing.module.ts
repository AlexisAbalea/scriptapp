import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { RandomAccrocheComponent } from './random-accroche/random-accroche.component';
import { ScriptPageVenteComponent } from './script-page-vente/script-page-vente.component';

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'login', component: LoginComponent},
  { path: 'script', component: ScriptPageVenteComponent},
  { path: 'accroche', component: RandomAccrocheComponent},
  { path: '**', component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
