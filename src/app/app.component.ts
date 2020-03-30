import { Component } from '@angular/core';
import { CovidDataService } from './covid-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recovered:number;
  hospitalized:number;
  statusNotDisclosed:number;

  viewFlag:boolean;
  status = false;
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

    this.viewFlag = true;
    console.log(this.searchStateTerm);
    if(this.searchStateTerm){

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
        this.getRecoveryStatus();
        this.status = true;
  
      });
    }
    else{
      this.searchStateTerm = "";
      console.log("Nothing to query");
    }
    
  }

  setState(state:string){
    console.log("state",state);
    this.searchStateTerm = state;
  }


  setDistrict(district:string){
    console.log("district",district);
    this.searchDistrictTerm = district;
  }


  setViewFlag(flag:string){
    if(flag == "false"){
      this.viewFlag = false;
    }else{
      this.viewFlag = true;
    }
  }

  getRecoveryStatus(){
    this.recovered = 0;
    this.hospitalized = 0;
    this.statusNotDisclosed =  0;

    for (let index = 0; index < this.filteredData.length; index++) {
      
      console.log(this.filteredData[index].currentstatus);

      if(this.filteredData[index].currentstatus == 'Recovered'){
          this.recovered++;
      }else if(this.filteredData[index].currentstatus == 'Hospitalized'){
          this.hospitalized++;
      }else if(this.filteredData[index].currentstatus == '') {
          this.statusNotDisclosed++;
      }
      
    }

  }


}
