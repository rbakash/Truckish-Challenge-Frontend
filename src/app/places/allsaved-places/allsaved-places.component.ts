import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';
import { NewPlaceModel } from 'src/app/models/newPlaceModel';
import { ImageDetails } from 'src/app/models/ImageDetailsModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allsaved-places',
  templateUrl: './allsaved-places.component.html',
  styleUrls: ['./allsaved-places.component.css']
})
export class AllsavedPlacesComponent implements OnInit {
  placeName;
  userId;
  isImageListEmpty= false;
  constructor(private router: Router,private commonService: CommonService) { }
  fetchedSavedPlace = new Array();
  ngOnInit() {
    this.userId = parseInt(sessionStorage.getItem("Id"));
    this.commonService.getAllSavedPlaces(this.userId).subscribe(response => {
      if (response.status == 200) {
        for (let i = 0; i < response.results.length; i++) {
          this.fetchedSavedPlace.push(response.results[i]);
          this.commonService.getImageByFileName(response.results[i].ImagePath).subscribe(response => {
            this.createImageFromBlob(response, i);
          })
        }
      }
      else{
        this.isImageListEmpty=true;
      }
    });

  }
  createImageFromBlob(image: Blob, i: number) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.fetchedSavedPlace[i].blob = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }
  viewSavedPlace(imageIndex) {
    this.commonService.savedImageDetails=this.fetchedSavedPlace;
    this.router.navigate(['/viewPlaceDetails', imageIndex]);
  }
}
