import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tableGames: any[]= [];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.games$.subscribe( (res:any) =>{
      for(let i=0; i< res.length; i++){
        for(let k=0; k< res[i].categories.length; k++){
          if(res[i].categories[k]=="table"){
            this.tableGames.push(res[i]);
          }
        }
        }
       console.log(this.tableGames);
       this.setJackpot();
      }
    )
  }

  setJackpot(){
    this.appService.jackpots$.subscribe( (res:any)=>{

      for(let k=0; k< this.tableGames.length; k++){
        for(let i=0; i<res.length; i++){
          if(this.tableGames[k].id == res[i].game){
            this.tableGames[k].jackpot = res[i].amount;
          }
        }
        
      }
    })
  }

}
