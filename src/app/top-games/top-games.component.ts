import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-top-games',
  templateUrl: './top-games.component.html',
  styleUrls: ['./top-games.component.css']
})
export class TopGamesComponent implements OnInit {

  topGames: any[]= [];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.games$.subscribe( (res:any) =>{
      for(let i=0; i< res.length; i++){
        for(let k=0; k< res[i].categories.length; k++){
          if(res[i].categories[k]=="top"){
            this.topGames.push(res[i]);
          }
        }
        }
       console.log(this.topGames);
       this.setJackpot();
      }
    )
  }

  setJackpot(){
    this.appService.jackpots$.subscribe( (res:any)=>{

      for(let k=0; k< this.topGames.length; k++){
        for(let i=0; i<res.length; i++){
          if(this.topGames[k].id == res[i].game){
            this.topGames[k].jackpot = res[i].amount;
          }
        }
        
      }
    })
  }

}
