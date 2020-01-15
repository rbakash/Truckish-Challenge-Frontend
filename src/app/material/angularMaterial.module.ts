import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatInputModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSnackBarModule ,
  
  
} from '@angular/material';

import { MatMenuModule } from '@angular/material/menu';

const MaterialComponent = [
      MatCardModule, MatButtonModule,
      MatCheckboxModule, MatGridListModule,
      MatInputModule, MatIconModule, 
      MatProgressSpinnerModule,MatMenuModule,
      MatToolbarModule,MatSnackBarModule 
    ]

@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent],
  providers: [],
})
export class MaterialModule { }