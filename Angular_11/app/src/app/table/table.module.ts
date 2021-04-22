import { NgModule } from "@angular/core";
import { CoreModule } from '../core/core.module';
import { TableRoutingModule } from './table-routing.module';
import { TableContainerComponent } from './table-container/table-container.component';
import { TableComponent } from './pages/table/table.component';
import { TableRowComponent } from './pages/table/components/table-row/table-row.component';

@NgModule({
  declarations: [
    //declare module components there
    TableContainerComponent,
    TableComponent,
    TableRowComponent
  ],
  imports: [
    CoreModule,
    TableRoutingModule,
  ],
  providers: [
    //module services & guards there
  ]
})
export class TableModule {}
