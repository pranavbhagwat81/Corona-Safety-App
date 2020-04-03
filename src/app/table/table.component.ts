import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data:[];

  constructor() { }

  ngOnInit(): void {
  }

 index:number=0;
  activeIndex:number = 0;
  flag:boolean=false;

  qnaArray = this.data;



    setActive(){
      return this.flag;
    }

    setActiveIndex(i:number){
      console.log(i);
      this.activeIndex = i;
    }


    debug(str:string){
        console.log(str);
    }

    getGenderRole(gender:string){
      if(gender == "F"){
        return "female icon";
      }else if(gender == "M"){
        return "male icon"
      }else{
        return ""
      }
        

      
    }

    
    getAccordionId(status:string){
      if(status == "Recovered"){
        return "colorMarkGreen"
      }else if(status == "Hospitalized"){
        return "colorMarkYellow"
      }else if(status == "Deceased"){
        return "colorMarkRed"
      }
    }

}
