import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';
import { NewPlaceModel } from "../../models/newPlaceModel";
import { ImageDetails } from "../../models/ImageDetailsModel";
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-place',
  templateUrl: './add-new-place.component.html',
  styleUrls: ['./add-new-place.component.css']
})
export class AddNewPlaceComponent implements OnInit {
  selectedFile = new ImageDetails();
  newPlace = new NewPlaceModel;
  constructor(private commonService: CommonService, private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', (event: any) => {

      this.selectedFile.Imagesource = event.target.result
      this.selectedFile.ImageFile = file;
      this.selectedFile.pending = true;
      this._snackBar.open('File selected Successfully', "Ok",{duration: 2000})
      this.newPlace.placeImage = this.selectedFile;
    });

  }
  uploadTheNewPlace() {

    this.commonService.uploadNewplaceDetails(this.newPlace).subscribe(response => {
      this._snackBar.open(response.Message, "Ok", { duration: 3500 });
      if (response.status == 200) {
        setTimeout((router: Router) => {
          this.router.navigate(['/viewSavedPlaces']);
        }, 1500);
      }
    },error => {
      this._snackBar.open('Internal Server Error', "Try again",{duration: 3500});
    });
  }
}
