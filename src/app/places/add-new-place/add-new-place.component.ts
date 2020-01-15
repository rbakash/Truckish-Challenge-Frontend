import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';
import { NewPlaceModel } from "../../models/newPlaceModel";
import { ImageDetails } from "../../models/ImageDetailsModel";

@Component({
  selector: 'app-add-new-place',
  templateUrl: './add-new-place.component.html',
  styleUrls: ['./add-new-place.component.css']
})
export class AddNewPlaceComponent implements OnInit {
  selectedFile= new ImageDetails();
  newPlace = new NewPlaceModel;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile.Imagesource=event.target.result
      this.selectedFile.ImageFile=file;
      this.selectedFile.pending = true;
      this.newPlace.placeImage=this.selectedFile;
      console.log(this.newPlace);
      // this.newPlace.placeImage.pending = true;
      //   this.commonService.uploadImage(this.selectedFile.ImageFile).subscribe(
      //     (res) => {
      //     console.log(res);

      //     },
      //     (err) => {
      //     console.log(err);

      //     })
    });

    reader.readAsDataURL(file);
  }
  LoginUser() {
    this.commonService.uploadImage(this.newPlace).subscribe(response => {
      console.log(response)
    })
  }
}
