import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  otherGames: any[]= [];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.games$.subscribe( (res:any) =>{
      for(let i=0; i< res.length; i++){
        for(let k=0; k< res[i].categories.length; k++){
          if(res[i].categories[k]=="fun"||res[i].categories[k]=="virtual"||res[i].categories[k]=="ball"){
            this.otherGames.push(res[i]);
          }
        }
        }
       console.log(this.otherGames);
       this.setJackpot();
      }
    )
  }

  setJackpot(){
    this.appService.jackpots$.subscribe( (res:any)=>{

      for(let k=0; k< this.otherGames.length; k++){
        for(let i=0; i<res.length; i++){
          if(this.otherGames[k].id == res[i].game){
            this.otherGames[k].jackpot = res[i].amount;
          }
        }
        
      }
    })
  }

}
