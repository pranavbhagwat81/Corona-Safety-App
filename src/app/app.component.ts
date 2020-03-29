import { Component } from '@angular/core';
import { CovidDataService } from './covid-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchTerm:string = '';

  searchStateTerm:string = '';
  searchDistrictTerm:string = '';
  searchCityTerm:string = '';

  totalData = [];
  filteredData = [];

  title = 'Corona-Safety-App';

  constructor(private covid:CovidDataService){

  }

  showData(){
    this.covid.getCovidData().subscribe((response : any)=>{
      console.log(this.searchTerm);
      console.log("response",response);
      
      this.totalData = [];
      this.filteredData = [] 

      this.totalData = response.raw_data;

      for (let index = 0; index < response["raw_data"].length; index++) {
        
        let temp =  this.totalData[index];
        let tempStatestr :string = temp["detectedstate"];
        let tempDistrictstr :string = temp["detecteddistrict"];
        if(  tempStatestr.toLowerCase() == this.searchStateTerm.toLowerCase()
          && tempDistrictstr.toLowerCase() == this.searchDistrictTerm.toLowerCase()
        ){

          this.filteredData.push(this.totalData[index]);

        }
       
      }

      console.log(this.filteredData);

    });
  }

  setState(state:string){
    console.log("state",state);
    this.searchStateTerm = state
  }

  setDistrict(district:string){
    console.log("district",district);
    this.searchDistrictTerm = district
  }


}
