import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.css']
})
export class PokerComponent implements OnInit {
  
  pokerGames: any[]= [];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.games$.subscribe( (res:any) =>{
      for(let i=0; i< res.length; i++){
        for(let k=0; k< res[i].categories.length; k++){
          if(res[i].categories[k]=="poker"){
            this.pokerGames.push(res[i]);
          }
        }
        }
       console.log(this.pokerGames);
       this.setJackpot();
      }
    )
  }

  setJackpot(){
    this.appService.jackpots$.subscribe( (res:any)=>{

      for(let k=0; k< this.pokerGames.length; k++){
        for(let i=0; i<res.length; i++){
          if(this.pokerGames[k].id == res[i].game){
            this.pokerGames[k].jackpot = res[i].amount;
          }
        }
        
      }
    })
  }

}
