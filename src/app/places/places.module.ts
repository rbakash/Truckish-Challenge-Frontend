import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesRoutingModule } from './places-routing.module';
import { AllsavedPlacesComponent } from './allsaved-places/allsaved-places.component';
import { AddNewPlaceComponent } from './add-new-place/add-new-place.component';
import { MaterialModule } from '../material/angularMaterial.module';


@NgModule({
  declarations: [AllsavedPlacesComponent, AddNewPlaceComponent],
  imports: [
    CommonModule,
    PlacesRoutingModule,
    MaterialModule
  ]
})
export class PlacesModule { }
