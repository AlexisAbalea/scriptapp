import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ScriptPageVenteComponent } from './script-page-vente/script-page-vente.component';
import { RandomAccrocheComponent } from './random-accroche/random-accroche.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import { SidebarComponent } from './script-page-vente/sidebar/sidebar.component';
import { EditionComponent } from './script-page-vente/edition/edition.component';
import { ExportComponent } from './script-page-vente/export/export.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulaireComponent } from './script-page-vente/formulaire/formulaire.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { JwtHelperService, JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { ScriptAppService } from './services/script-app.service';
import {MatMenuModule} from '@angular/material/menu';
import { AdminComponent } from './admin/admin.component';
import { SidebarAdminComponent } from './admin/sidebar-admin/sidebar-admin.component';
import { AdminUtilisateurComponent } from './admin/admin-utilisateur/admin-utilisateur.component';
import { AdminPageVenteComponent } from './admin/admin-page-vente/admin-page-vente.component';
import { AdminAccrocheComponent } from './admin/admin-accroche/admin-accroche.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgoloKanteInterceptor } from './services/ngolokante.interceptor';
import { TableauResultatComponent } from './components/tableau-resultat/tableau-resultat.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { ProfilComponent } from './profil/profil.component';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

const JWT_Module_Options: JwtModuleOptions = {
  config: {
    tokenGetter: tokenGetter
  }
};

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ScriptPageVenteComponent,
    RandomAccrocheComponent,
    SidebarComponent,
    EditionComponent,
    ExportComponent,
    FormulaireComponent,
    SnackbarComponent,
    AdminComponent,
    SidebarAdminComponent,
    AdminUtilisateurComponent,
    AdminPageVenteComponent,
    AdminAccrocheComponent,
    TableauResultatComponent,
    DialogConfirmComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatStepperModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTooltipModule,
    FormsModule,
    MatTableModule,
    MatSnackBarModule,
    JwtModule.forRoot(JWT_Module_Options),
    MatMenuModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  providers: [
    JwtHelperService,
    AuthService,
    ScriptAppService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NgoloKanteInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    SnackbarComponent,
    DialogConfirmComponent
  ]
})
export class AppModule { }
