import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FestivalComponent } from './components/festival/festival.component';
import { MusicsearchComponent } from './components/musicsearch/musicsearch.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

const AppRoutes: Routes = [
	{
		path:'',
		component:SearchComponent
	},
	{
		path:'about',
		component:AboutComponent
	},
	{
		path:'contact',
		component:ContactComponent
	},
	{
		path:'festival',
		component:FestivalComponent
	},
	{
		path:'musicsearch',
		component:MusicsearchComponent
	},
	{
		path:'artist/:id',
		component:ArtistComponent
	},
	{
		path:'album/:id',
		component:AlbumComponent
	}

	

];
export const routing: ModulWithProviders = RouterModule.forRoot(AppRoutes);
