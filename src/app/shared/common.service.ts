import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { nodeServerURL } from './apiConfig';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  authenticateUser(UserCredentails){
    return this.http.post(nodeServerURL.endpoint+"authenticateUser",UserCredentails).pipe(map((response:any) => {
      return response;
  }));;
  }
}
