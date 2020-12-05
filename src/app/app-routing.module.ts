import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { RandomAccrocheComponent } from './random-accroche/random-accroche.component';
import { ScriptPageVenteComponent } from './script-page-vente/script-page-vente.component';
import { RoleGuardService } from './services/role-guard-service.service';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: AccueilComponent, canActivate: [AuthGuardService]},
  { path: 'accueil', component: AccueilComponent, canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent},
  { path: 'script', component: ScriptPageVenteComponent, canActivate: [AuthGuardService]},
  { path: 'accroche', component: RandomAccrocheComponent, canActivate: [AuthGuardService]},
  { path: 'admin', component: AdminComponent, canActivate: [RoleGuardService], data: { expectedRole: 'admin' }},
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
