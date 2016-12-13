import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  moduleId:module.id,
  selector: 'musicsearch',
  templateUrl: 'musicsearch.component.html'
})
export class MusicsearchComponent  { 
	searchStr:string;
	

	constructor(private _spotifyService:SpotifyService){

	}

	searchMusic(){
		this._spotifyService.searchMusic(this.searchStr).subscribe(res=> {
			this.searchRes= res.artists.items;
		});
		
	}


}