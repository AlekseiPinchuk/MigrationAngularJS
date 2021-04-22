import { NgModule } from "@angular/core";
import { CoreModule } from '../core/core.module';
import { TableRoutingModule } from './table-routing.module';
import { TableContainerComponent } from './table-container/table-container.component';
import { TableComponent } from './pages/table/table.component';

@NgModule({
  declarations: [
    //declare module components there
    TableContainerComponent,
    TableComponent,
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
