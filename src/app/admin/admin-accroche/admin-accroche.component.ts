import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { DialogConfirmComponent } from 'src/app/components/dialog-confirm/dialog-confirm.component';
import { ScriptAppService } from 'src/app/services/script-app.service';
import { SnackbarComponent } from 'src/app/snackbar/snackbar.component';

@Component({
  selector: 'app-admin-accroche',
  templateUrl: './admin-accroche.component.html',
  styleUrls: ['./admin-accroche.component.scss']
})
export class AdminAccrocheComponent implements OnInit {

  listeAccroche = new MatTableDataSource([]);

  displayedColumns: string[] = ['position', 'accroche', 'actions'];

  accroche;

  listeAccrocheBdd = [];

  constructor(private scriptService: ScriptAppService, private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllAccroches();
  }

  checkAccroche(accroche: string) {
    if (!accroche) {
      return true;
    }
    const regex = /\%\%[\d]\%\%/g;
    return !accroche.match(regex);
  }

  createAccroche(accroche) {
    this.scriptService.createAccroche(accroche).then(() => {
      this.openSnackBar('L\'accroche a bien été créée', false);
      this.getAllAccroches();
    }).catch(error => {
      this.openSnackBar('Oups, ça n\'a pas fonctionné', true);
      console.log(error);
    });
  }

  getAllAccroches() {
    this.scriptService.getAllAccroches().subscribe(val => {
      if (val) {
        this.listeAccrocheBdd = [...val];
        this.listeAccroche = new MatTableDataSource(this.setAccrochesMatTable(val));
      }
    });
  }

  setAccrochesMatTable(listeAccroche) {
    return listeAccroche.map((val, i) => {
      return {position: i + 1, accroche: val.accroche};
    });
  }

  openSnackBar(message, isError) {
    const classe = isError ? 'mat-warn' : 'succes-snackbar';
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 6000,
      data: message,
      panelClass: ['mat-toolbar', classe]
    });
  }

  deleteAccroche(event) {
    const accroche = this.listeAccrocheBdd.find(val => event.accroche === val.accroche);
    if (accroche) {
      this.openDialog().afterClosed().subscribe(result => {
        if (result) {
          this.scriptService.deleteAccroche(accroche._id).then(val => {
            console.log('succes');
            this.openSnackBar('L\'accroche a bien été supprimée', false);
            this.getAllAccroches();
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
