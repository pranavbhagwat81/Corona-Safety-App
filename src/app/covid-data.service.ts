import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  

  constructor(private http:HttpClient) {

   }

  getCovidData(){

    return this.http.get("https://api.covid19india.org/raw_data.json");

  }
  



}
