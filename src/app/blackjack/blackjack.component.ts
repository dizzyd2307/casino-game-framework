import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.css']
})
export class BlackjackComponent implements OnInit {

  blackjackGames: any[]= [];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.games$.subscribe( (res:any) =>{
      for(let i=0; i< res.length; i++){
        for(let k=0; k< res[i].categories.length; k++){
          if(res[i].categories[k]=="blackjack"){
            this.blackjackGames.push(res[i]);
          }
        }
        }
       console.log(this.blackjackGames);
       this.setJackpot();
      }
    )
  }

  setJackpot(){
    this.appService.jackpots$.subscribe( (res:any)=>{

      for(let k=0; k< this.blackjackGames.length; k++){
        for(let i=0; i<res.length; i++){
          if(this.blackjackGames[k].id == res[i].game){
            this.blackjackGames[k].jackpot = res[i].amount;
          }
        }
        
      }
    })
  }

}
