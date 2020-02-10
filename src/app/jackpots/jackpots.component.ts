import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-jackpots',
  templateUrl: './jackpots.component.html',
  styleUrls: ['./jackpots.component.css']
})
export class JackpotsComponent implements OnInit {

  jackpotGames: any[]= [];
  currentJackpot: any[] =[];
  
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.games$.subscribe( (res:any) =>{
      for(let i=0; i< res.length; i++){
        this.jackpotGames.push(res[i])
        }
       console.log(this.jackpotGames);
       this.setJackpot();
      }
    )
  }

  setJackpot(){
    this.appService.jackpots$.subscribe( (res:any)=>{

      for(let k=0; k< this.jackpotGames.length; k++){
        for(let i=0; i<res.length; i++){
          if(this.jackpotGames[k].id == res[i].game){
            this.jackpotGames[k].jackpot = res[i].amount;
            this.currentJackpot.push(this.jackpotGames[k]);
          }
        }
        
      }
    })
  }

}
