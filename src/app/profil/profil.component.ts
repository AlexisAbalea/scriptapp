import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  modeChgMdp: boolean;
  email: string;
  form;

  constructor(private fb: FormBuilder, private authService: AuthService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (!this.authService.user.email) {
      this.authService.setUserStorage();
    }
    this.email = this.authService.user.email;
    this.form = this.fb.group({
      oldPassword: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  modeChangmtMdp() {
    this.modeChgMdp = true;
  }

  modifierMdp() {
    if (this.form.value.password !== this.form.value.confirmPassword) {
      this.openSnackBar('Le mot de passe de confirmation est incorrect.', false);
      return false;
    }
    this.authService.changeMdp(this.email, this.form.value.password, this.form.value.oldPassword).subscribe(retour => {
      if (retour) {
        this.modeChgMdp = false;
        this.openSnackBar('Mot de passe modifié avec succès.', true);
      }
    }, error => {
      console.log(error);
      this.openSnackBar('Echec de la modification du mot de passe', false);
    });
  }

  openSnackBar(message, succes) {
    let color = 'mat-warn';
    if (succes) {
      color = 'mat-primary';
    }
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 6000,
      data: message,
      panelClass: ['mat-toolbar', color]
    });
  }

}
