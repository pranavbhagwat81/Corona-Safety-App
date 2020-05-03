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

  confirmed:number;
  recovered:number;
  hospitalized:number;
  deceased : number;
  statusNotDisclosed:number;

  viewFlag:boolean;
  status = false;
  searchTerm:string = '';

  searchStateTerm:string = '';
  searchDistrictTerm:string = '';
  zoneTerm :string= '';
  searchCityTerm:string = '';

  totalData = [];
  startingData = [];
  filteredData = [];

  title = 'Corona-Safety-App';

  constructor(private covid:CovidDataService){
   
  }

 ngOnInit(): void {
  //console.log("In constructor ");
  this.covid.getStartingData().subscribe((response:any)=>{
    this.startingData = response;
    //console.log(this.startingData);

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
    //console.log(this.searchStateTerm);
    if(this.searchStateTerm){

      this.covid.getCovidData().subscribe(responseList => {
        let responseData1:any = responseList[0];
        let responseData2:any = responseList[1];
        let responseData3:any = responseList[2];

        let temparr = [];
        let temparrIndex = 0;
        var response = {
         
        };
        

        for (let index = 0; index < responseData1.raw_data.length; index++) {
          temparr[temparrIndex]= responseData1.raw_data[index];
          temparrIndex++;
        }

        for (let index = 0; index < responseData2.raw_data.length; index++) {
          temparr[temparrIndex]= responseData2.raw_data[index];
          temparrIndex++;
        }

        for (let index = 0; index < responseData3.raw_data.length; index++) {
          temparr[temparrIndex]= responseData2.raw_data[index];
          temparrIndex++;
        }

        //console.log(responseData3);
        response["raw_data"] = temparr;

        //console.log(temparr);
        //console.log(response["raw_data"]);

        this.totalData = [];
        this.filteredData = [] 
  
        this.totalData = response["raw_data"];

        //console.log(response);
        //console.log(this.totalData);
  
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
  
        //console.log(this.filteredData);
        this.getRecoveryStatus();
        this.status = true;
		document.getElementById("Patientstable").focus();


    });

    //   this.covid.getCovidData().subscribe((response : any)=>{

    //     console.log(this.searchTerm);
    //     console.log("response",response);
        
    //     this.totalData = [];
    //     this.filteredData = [] 
  
    //     this.totalData = response.raw_data;
  
    //     for (let index = 0; index < response["raw_data"].length; index++) {
          
    //       let temp =  this.totalData[index];
    //       let tempStatestr :string = temp["detectedstate"];
    //       let tempDistrictstr :string = temp["detecteddistrict"];
    //       if(  tempStatestr.toLowerCase() == this.searchStateTerm.toLowerCase()
    //         && tempDistrictstr.toLowerCase() == this.searchDistrictTerm.toLowerCase()
    //       ){
  
    //         this.filteredData.push(this.totalData[index]);
  
    //       }
         
    //     }
  
    //     console.log(this.filteredData);
    //     this.getRecoveryStatus();
    //     this.status = true;
		// document.getElementById("Patientstable").focus();
  
    //   });
    }
    else{
      this.searchStateTerm = "";
      //console.log("Nothing to query");
    }
    
  }

  setState(state:string){
    console.log("state",state);
    this.searchStateTerm = state;
  }


  setDistrict(district:string){
    //console.log("district",district);
    this.searchDistrictTerm = district;
  }

  setZone(zone:string){
    console.log("zone:",zone);
    if(zone == ""){
      this.zoneTerm = 'GREEN';
    }else{
      this.zoneTerm = zone.toUpperCase();
    }
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

    this.covid.getStateDistrictData().subscribe(response => {
      
      let state = this.filteredData[0].detectedstate;
      let district = this.filteredData[0].detecteddistrict;

      console.log("state district",state," ",district)

      let responseLen = Object.keys(response).length

      console.log(response);
      for (let index = 0; index < responseLen; index++) {
        
        if(response[index].state == state){
            console.log("in state if :",state);
            
          for (let index2 = 0; index2 < response[index].districtData.length; index2++) {
            console.log("response[index].districtData[index2].district",response[index].districtData[index2].district);
            
            if(response[index].districtData[index2].district == district){

              console.log("in district if :",district);
              console.log(response[index].districtData[index2].confirmed);
              console.log(response[index].districtData[index2].recovered);
              console.log(response[index].districtData[index2].active);
              console.log(response[index].districtData[index2].deceased);
              this.confirmed = response[index].districtData[index2].confirmed;
              this.recovered = response[index].districtData[index2].recovered;
              this.hospitalized = response[index].districtData[index2].active;
              this.deceased = response[index].districtData[index2].deceased;
            }
            
          }
      
        }
        
      }

    });


    // for (let index = 0; index < this.filteredData.length; index++) {
      
    //   console.log(this.filteredData[index].currentstatus);

    //   if(this.filteredData[index].currentstatus == 'Recovered'){
    //       this.recovered++;
    //   }else if(this.filteredData[index].currentstatus == 'Hospitalized'){
    //       this.hospitalized++;
    //   }else if(this.filteredData[index].currentstatus == '') {
    //       this.statusNotDisclosed++;
    //   }else if(this.filteredData[index].currentstatus == 'Deceased'){
    //       this.deceased++;
    //   }
      
    // }

  }


}
