import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesRoutingModule } from './places-routing.module';
import { AllsavedPlacesComponent } from './allsaved-places/allsaved-places.component';
import { AddNewPlaceComponent } from './add-new-place/add-new-place.component';
import { MaterialModule } from '../material/angularMaterial.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ViewSavedPlaceComponent } from './view-saved-place/view-saved-place.component';

@NgModule({
  declarations: [AllsavedPlacesComponent, AddNewPlaceComponent, ViewSavedPlaceComponent],
  imports: [
    CommonModule,
    PlacesRoutingModule,
    MaterialModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class PlacesModule { }
