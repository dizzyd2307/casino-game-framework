import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // games: Object[] =[];
  public games$ = new BehaviorSubject<Object[]>([]);
  public jackpots$ = new BehaviorSubject<Object[]>([]);
  constructor(private http: HttpClient) { 
    this.getGames();
  }

  getGames(){
    this.http.get('http://stage.whgstage.com/front-end-test/games.php').subscribe( (res:any) =>{
    let games = [];
    res.forEach(function(game){
      for(let i=0; i< game.categories.length; i++){
        if(game.categories[i] == "top"){
          game.top =true
        }

        if(game.categories[i] == "new"){
          game.new= true;
        }
        
      }
      games.push(game);
    })
    this.games$.next(games);
    this.getJackpot();
      console.log(res)
    })
  }

  getJackpot(){
    this.http.get('http://stage.whgstage.com/front-end-test/jackpots.php').subscribe((res: any)=>{
     console.log(res);
    this.jackpots$.next(res);
    })
  }
}
