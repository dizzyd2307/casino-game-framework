import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {

  slotGames: any[]= [];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.games$.subscribe( (res:any) =>{
      for(let i=0; i< res.length; i++){
        for(let k=0; k< res[i].categories.length; k++){
          if(res[i].categories[k]=="slots"){
            this.slotGames.push(res[i]);
          }
        }
        }
       console.log(this.slotGames);
       this.setJackpot();
      }
    )
  }

  setJackpot(){
    this.appService.jackpots$.subscribe( (res:any)=>{

      for(let k=0; k< this.slotGames.length; k++){
        for(let i=0; i<res.length; i++){
          if(this.slotGames[k].id == res[i].game){
            this.slotGames[k].jackpot = res[i].amount;
          }
        }
        
      }
    })
  }

}
