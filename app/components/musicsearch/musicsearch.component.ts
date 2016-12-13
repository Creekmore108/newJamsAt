import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';

@Component({
  moduleId:module.id,
  selector: 'musicsearch',
  templateUrl: `musicsearch.component.html`
})
export class MusicsearchComponent  { 
	searchStr:string;
	searchRes: Artist[]

	constructor(private _spotifyService:SpotifyService){

	}

	searchMusic(){
		this._spotifyService.searchMusic(this.searchStr).subscribe(res=> {
			this.searchRes= res.artists.items;
		});
		
	}


}