import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { DialogConfirmComponent } from 'src/app/components/dialog-confirm/dialog-confirm.component';
import { AuthService } from 'src/app/services/auth.service';
import { SnackbarComponent } from 'src/app/snackbar/snackbar.component';

@Component({
  selector: 'app-admin-utilisateur',
  templateUrl: './admin-utilisateur.component.html',
  styleUrls: ['./admin-utilisateur.component.scss']
})
export class AdminUtilisateurComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService, private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  user: FormGroup;
  listeUser = new MatTableDataSource([]);

  listeUserBdd = [];

  displayedColumns: string[] = ['position', 'login', 'admin', 'actions'];

  ngOnInit(): void {
    this.initFormUser();
    this.getAllUser();
  }

  getAllUser() {
    this.authService.getAllUser().subscribe(val => {
      if (val) {
        this.listeUserBdd = [...val];
        this.listeUser = new MatTableDataSource(this.setUsersMatTable(val));
      }
    });
  }

  setUsersMatTable(listeUser) {
    return listeUser.map((val, i) => {
      return {position: i + 1, login: val.email, admin: val.admin ? 'Oui' : 'Non'};
    });
  }

  initFormUser() {
    this.user = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      isAdmin: [false]
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listeUser.filter = filterValue.trim().toLowerCase();
  }


  createUser() {
    this.authService.createUser(this.user.get('email').value, this.user.get('password').value).then(val => {
      this.openSnackBar('L\'utilisateur a bien été créé', false);
      this.getAllUser();
    }).catch(error => {
      this.openSnackBar('Oups, ça n\'a pas fonctionné', true);
      console.log(error);
    });
  }

  openSnackBar(message, isError) {
    const classe = isError ? 'mat-warn' : 'mat-accent';
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 6000,
      data: message,
      panelClass: ['mat-toolbar', classe]
    });
  }


  deleteUser(event) {
    const user = this.listeUserBdd.find(val => event.login === val.email);
    if (user) {
      this.openDialog().afterClosed().subscribe(result => {
        if (result) {
          this.authService.deleteUser(user._id).then(val => {
            this.openSnackBar('L\'utilisateur a bien été supprimé', false);
            this.getAllUser();
          }).catch(error => {
            this.openSnackBar('Oups, ça n\'a pas fonctionné', true);
            console.log(error);
          });
        }
      });
    } else {
      this.openSnackBar('Oups, ça n\'a pas fonctionné', true);
    }
  }

  openDialog() {
    return this.dialog.open(DialogConfirmComponent, {
      width: '400px'
    });
  }

}
