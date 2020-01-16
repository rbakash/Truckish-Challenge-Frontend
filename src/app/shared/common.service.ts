import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { nodeServerURL } from './apiConfig';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NewPlaceModel } from '../models/newPlaceModel';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  savedImageDetails= new Array();
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
    const customHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('Token')
  });
    const formData = new FormData();
    formData.append("UserId",sessionStorage.getItem("Id"))
    formData.append('newPlaceNameimage', newPlaceDetails.placeImage.ImageFile);
    formData.append('newPlaceName',newPlaceDetails.placeName);
    formData.append('newPlaceDescription',newPlaceDetails.placeDescription);
    formData.append('newPlaceAddress',newPlaceDetails.placeAddress);

    return this.http.post(nodeServerURL.endpoint+'addPlaceSubmission', formData,{ headers: customHeaders }).pipe(map((response:any) => {
      return response;
  })
  );
  }
  getAllSavedPlaces(userId){
    const customHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('Token')
  });
    return this.http.post(nodeServerURL.endpoint+"getSavedPlaces",{"UserId":userId},{ headers: customHeaders }).pipe(map((response:any) => {
      return response;
  })
  );
  }
  getImageByFileName(imgFilename):Observable<Blob>{
    const customHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + sessionStorage.getItem('Token')
  });
    return this.http.post(nodeServerURL.endpoint+"getImagesByFileName",{"FileName":imgFilename},{ responseType: 'blob',headers: customHeaders },);
  }
  getImageDetails(imageId){
    return this.savedImageDetails[imageId];
  }
}
