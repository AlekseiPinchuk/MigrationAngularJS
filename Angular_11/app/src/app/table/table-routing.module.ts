import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TableContainerComponent } from './table-container/table-container.component';
import { TableComponent } from './pages/table/table.component';

const tableRoutes: Routes = [
  {
    path: '',
    component: TableContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'table',
        pathMatch: 'full',
      },
      {
        path: 'table',
        component: TableComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(tableRoutes)],
  exports: [RouterModule]
})
export class TableRoutingModule {}
