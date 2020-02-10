import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  liveGames: any[]= [];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.games$.subscribe( (res:any) =>{
      for(let i=0; i< res.length; i++){
        for(let k=0; k< res[i].categories.length; k++){
          if(res[i].categories[k]=="live"){
            this.liveGames.push(res[i]);
          }
        }
        }
       console.log(this.liveGames);
       this.setJackpot();
      }
    )
  }

  setJackpot(){
    this.appService.jackpots$.subscribe( (res:any)=>{

      for(let k=0; k< this.liveGames.length; k++){
        for(let i=0; i<res.length; i++){
          if(this.liveGames[k].id == res[i].game){
            this.liveGames[k].jackpot = res[i].amount;
          }
        }
        
      }
    })
  }

}
