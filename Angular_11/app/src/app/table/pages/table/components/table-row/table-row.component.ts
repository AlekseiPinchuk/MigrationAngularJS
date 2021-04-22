import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableRowDataInterface } from '../../../../interfaces/table-row-data.interface';

@Component({
  selector: '[table-row]',
  templateUrl: './table-row.component.html',
})
export class TableRowComponent {
  @Input() user: TableRowDataInterface;
  @Output() onChange = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<number>();

  constructor() {
    //
  }

  public onEditClick(id: number): void {
    this.onChange.emit(id);
  }

  public onDeleteClick(id: number): void {
    this.onDelete.emit(id);
  }
}
