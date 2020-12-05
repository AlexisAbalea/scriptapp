import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tableau-resultat',
  templateUrl: './tableau-resultat.component.html',
  styleUrls: ['./tableau-resultat.component.scss']
})
export class TableauResultatComponent implements OnInit {

  @Input() liste = new MatTableDataSource([]);

  @Input() displayedColumns: string[] = [];

  @Output() toDelete = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.liste.filter = filterValue.trim().toLowerCase();
  }

  deleteElement(element) {
    this.toDelete.emit(element);
  }

}
