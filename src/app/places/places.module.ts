import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesRoutingModule } from './places-routing.module';
import { AllsavedPlacesComponent } from './allsaved-places/allsaved-places.component';
import { AddNewPlaceComponent } from './add-new-place/add-new-place.component';
import { MaterialModule } from '../material/angularMaterial.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AllsavedPlacesComponent, AddNewPlaceComponent],
  imports: [
    CommonModule,
    PlacesRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class PlacesModule { }
