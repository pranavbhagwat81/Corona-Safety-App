import { Component } from '@angular/core';
import { CovidDataService } from './covid-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  visibleFlag = true;

  confirmedSummary:number;
  activeSummary:number;
  recoveredSummary:number;
  deceasedSummary:number;

  recovered:number;
  hospitalized:number;
  deceased : number;
  statusNotDisclosed:number;

  viewFlag:boolean;
  status = false;
  searchTerm:string = '';

  searchStateTerm:string = '';
  searchDistrictTerm:string = '';
  searchCityTerm:string = '';

  totalData = [];
  startingData = [];
  filteredData = [];

  title = 'Corona-Safety-App';

  constructor(private covid:CovidDataService){
   
  }

 ngOnInit(): void {
  console.log("In constructor ");
  this.covid.getStartingData().subscribe((response:any)=>{
    this.startingData = response;
    console.log(this.startingData);

    for(let i=0;i<this.startingData.length;i++){
      if(this.startingData[i].state == "Total"){
              this.confirmedSummary = this.startingData[i].confirmed;
              this.activeSummary    = this.startingData[i].active;
              this.recoveredSummary = this.startingData[i].recovered;
              this.deceasedSummary  = this.startingData[i].deaths;
      } 
  }

  });
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
		document.getElementById("Patientstable").focus();
  
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
    this.deceased = 0;
    this.statusNotDisclosed =  0;

    for (let index = 0; index < this.filteredData.length; index++) {
      
      console.log(this.filteredData[index].currentstatus);

      if(this.filteredData[index].currentstatus == 'Recovered'){
          this.recovered++;
      }else if(this.filteredData[index].currentstatus == 'Hospitalized'){
          this.hospitalized++;
      }else if(this.filteredData[index].currentstatus == '') {
          this.statusNotDisclosed++;
      }else if(this.filteredData[index].currentstatus == 'Deceased'){
          this.deceased++;
      }
      
    }

  }

getDistrictLabel() {
	return this.searchDistrictTerm + " District Data";
}
}
