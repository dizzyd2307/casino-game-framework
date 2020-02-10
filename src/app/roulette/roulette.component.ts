import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css']
})
export class RouletteComponent implements OnInit {

  rouletteGames: any[]= [];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.games$.subscribe( (res:any) =>{
      for(let i=0; i< res.length; i++){
        for(let k=0; k< res[i].categories.length; k++){
          if(res[i].categories[k]=="roulette"){
            this.rouletteGames.push(res[i]);
          }
        }
        }
       console.log(this.rouletteGames);
       this.setJackpot();
      }
    )
  }

  setJackpot(){
    this.appService.jackpots$.subscribe( (res:any)=>{

      for(let k=0; k< this.rouletteGames.length; k++){
        for(let i=0; i<res.length; i++){
          if(this.rouletteGames[k].id == res[i].game){
            this.rouletteGames[k].jackpot = res[i].amount;
          }
        }
        
      }
    })
  }

}
