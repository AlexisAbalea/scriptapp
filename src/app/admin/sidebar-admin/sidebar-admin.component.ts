import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})
export class SidebarAdminComponent implements OnInit {
  panelOpenState = false;

  @Output() sidebarMenu = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickMenu(menu) {
    this.sidebarMenu.emit(menu);
  }

}
