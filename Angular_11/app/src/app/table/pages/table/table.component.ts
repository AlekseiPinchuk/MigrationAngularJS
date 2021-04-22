import { Component, OnInit } from '@angular/core';
import { TableRowDataInterface } from '../../interfaces/table-row-data.interface';
import { LocalStorageService } from '../../../core/services/local-storage.service';

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  private readonly mockData: TableRowDataInterface[] = [
    {
      id: 1,
      firstName: 'First Name 1',
      lastName: 'Last Name 1',
      isActive: true,
      show: false,
    },
    {
      id: 2,
      firstName: 'First Name 2',
      lastName: 'Last Name 2',
      isActive: false,
      show: false,
    },
  ];

  users: TableRowDataInterface[] = [];

  constructor(
    private LocalStorageService: LocalStorageService,
  ) {
    //
  }

  ngOnInit() {
    if (!this.LocalStorageService.isItemExist('items')) {
      this.users = this.mockData;
      this.LocalStorageService.setItem('items', this.users);
    } else {
      this.users = this.LocalStorageService.getItem('items');
      this.users = this.users.filter(item => {
        return item.firstName || item.lastName;
      });
      this.LocalStorageService.setItem('items', this.users);
    }
  }
}
