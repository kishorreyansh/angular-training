import { Component } from '@angular/core';
import playersData from './players_data';
import { NgxPaginationModule } from 'ngx-pagination'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-iplplayers',
  imports: [NgxPaginationModule,FormsModule],
  templateUrl: './iplplayers.component.html',
  styleUrl: './iplplayers.component.css'
})
export class IplplayersComponent {
    playersArray = playersData;

    p: number = 1;
    searchPlayer: string = '';
  
    sortAscending() {
      this.playersArray.sort((a, b) => a.Player_Id - b.Player_Id);
    }
  
    sortDescending(){
      this.playersArray.sort((a,b) => b.Player_Id - a.Player_Id);
    }
  
    get searchPlayers(){
      let findPlayer = this.searchPlayer.toLowerCase();
      return this.playersArray.filter((player => player.Player_Name.toLowerCase().includes(findPlayer)));
    }
}
