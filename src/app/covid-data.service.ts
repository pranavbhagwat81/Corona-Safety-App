import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';
import {forkJoin} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  

  constructor(private http:HttpClient) {

   }

  getStartingData(){
    return this.http.get("https://api.covid19india.org/data.json").pipe(
      pluck('statewise')
    );
  }


  getCovidData(){

    let response1 = this.http.get("https://api.covid19india.org/raw_data1.json");
    let response2 = this.http.get("https://api.covid19india.org/raw_data2.json");
    let response3 = this.http.get("https://api.covid19india.org/raw_data3.json");
    // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
    return forkJoin([response1, response2, response3]);

  }

  getStateDistrictData(){
    return this.http.get("https://api.covid19india.org/v2/state_district_wise.json");
  }
  
  


}
