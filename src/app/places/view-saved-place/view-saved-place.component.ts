import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-view-saved-place',
  templateUrl: './view-saved-place.component.html',
  styleUrls: ['./view-saved-place.component.css']
})
export class ViewSavedPlaceComponent implements OnInit {
  imageId;
  constructor( private route: ActivatedRoute,private commonService: CommonService) { }
  imageDetails;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.imageId = parseInt(params['id']);
    });
    this.imageDetails=this.commonService.getImageDetails(this.imageId)
  }

}
