import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class AngularMaterialModule { }
