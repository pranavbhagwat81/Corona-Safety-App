import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

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

    return this.http.get("https://api.covid19india.org/raw_data.json");

  }
  



}
