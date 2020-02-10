import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from '../app/app.service';
import { AppComponent } from './app.component';
import { TopGamesComponent } from './top-games/top-games.component';
import { NewGamesComponent } from './new-games/new-games.component';
import { SlotsComponent } from './slots/slots.component';
import { JackpotsComponent } from './jackpots/jackpots.component';
import { LiveComponent } from './live/live.component';
import { BlackjackComponent } from './blackjack/blackjack.component';
import { RouletteComponent } from './roulette/roulette.component';
import { TableComponent } from './table/table.component';
import { PokerComponent } from './poker/poker.component';
import { OtherComponent } from './other/other.component';

const routes: Routes =[
  { path: '', component: TopGamesComponent },
  { path: 'new', component: NewGamesComponent },
  { path: 'slots', component: SlotsComponent },
  { path: 'jackpots', component: JackpotsComponent },
  { path: 'live', component: LiveComponent },
  { path: 'blackjack', component: BlackjackComponent },
  { path: 'roulette', component: RouletteComponent },
  { path: 'table', component: TableComponent },
  { path: 'poker', component: PokerComponent },
  { path: 'other', component: OtherComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    TopGamesComponent,
    NewGamesComponent,
    SlotsComponent,
    JackpotsComponent,
    LiveComponent,
    BlackjackComponent,
    RouletteComponent,
    TableComponent,
    PokerComponent,
    OtherComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
