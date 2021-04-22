import { Component, Input, OnInit } from "@angular/core";
import { TableRowDataInterface } from '../../../../interfaces/table-row-data.interface';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
})
export class TableRowComponent {
  @Input() user: TableRowDataInterface;

  constructor() {
    //
  }
}
