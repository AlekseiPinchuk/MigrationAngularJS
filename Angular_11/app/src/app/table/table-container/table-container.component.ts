import { Component } from '@angular/core';

@Component({
  selector: 'app-table-container',
  template: `
        <div>
            <router-outlet></router-outlet>
        </div>
    `,
})
export class TableContainerComponent {
  constructor() {
    //
  }
}
