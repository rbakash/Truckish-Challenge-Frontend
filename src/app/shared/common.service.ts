import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { nodeServerURL } from './apiConfig';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NewPlaceModel } from '../models/newPlaceModel';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient,private router: Router) { }

  authenticateUser(UserCredentails){
    return this.http.post(nodeServerURL.endpoint+"authenticateUser",UserCredentails).pipe(map((response:any) => {
      return response;
  }));
  }
  logout(){
    sessionStorage.removeItem("Token");
    this.router.navigate([''])
  }
  navigteToAddPlace(){
    this.router.navigate(['addNewPlace']);
  }
  navigteToViewSavedPlace(){
    this.router.navigate(['viewSavedPlaces']);
  }
  public uploadNewplaceDetails(newPlaceDetails:NewPlaceModel){
    const formData = new FormData();
    formData.append("UserId",sessionStorage.getItem("Id"))
    formData.append('newPlaceNameimage', newPlaceDetails.placeImage.ImageFile);
    formData.append('newPlaceName',newPlaceDetails.placeName);
    formData.append('newPlaceDescription',newPlaceDetails.placeDescription);
    formData.append('newPlaceAddress',newPlaceDetails.placeAddress);

    return this.http.post(nodeServerURL.endpoint+'addPlaceSubmission', formData).pipe(map((response:any) => {
      return response;
  }));
  }
}
