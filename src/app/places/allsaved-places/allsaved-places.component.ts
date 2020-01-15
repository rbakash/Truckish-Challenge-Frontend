import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-allsaved-places',
  templateUrl: './allsaved-places.component.html',
  styleUrls: ['./allsaved-places.component.css']
})
export class AllsavedPlacesComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }
  
}
