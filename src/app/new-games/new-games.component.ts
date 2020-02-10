import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-new-games',
  templateUrl: './new-games.component.html',
  styleUrls: ['./new-games.component.css']
})
export class NewGamesComponent implements OnInit {

  newGames: any[]= [];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.games$.subscribe( (res:any) =>{
      for(let i=0; i< res.length; i++){
        for(let k=0; k< res[i].categories.length; k++){
          if(res[i].categories[k]=="new"){
            this.newGames.push(res[i]);
          }
        }
        }
       console.log(this.newGames);
       this.setJackpot();
      }
    )
  }

  setJackpot(){
    this.appService.jackpots$.subscribe( (res:any)=>{

      for(let k=0; k< this.newGames.length; k++){
        for(let i=0; i<res.length; i++){
          if(this.newGames[k].id == res[i].game){
            this.newGames[k].jackpot = res[i].amount;
          }
        }
        
      }
    })
  }

}
