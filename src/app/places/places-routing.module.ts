import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllsavedPlacesComponent } from './allsaved-places/allsaved-places.component';
import { AddNewPlaceComponent } from './add-new-place/add-new-place.component';
import { AuthGuardService  } from '../Shared/auth-guard.service';

const routes: Routes = [
  { path: 'viewSavedPlaces', component: AllsavedPlacesComponent ,canActivate: [AuthGuardService]   },
  { path: 'addNewPlace', component: AddNewPlaceComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class PlacesRoutingModule { }