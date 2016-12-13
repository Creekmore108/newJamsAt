import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

import { MusicsearchComponent } from './components/musicsearch/musicsearch.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { SearchComponent } from './components/search/search.component';
import { FestivalComponent } from './components/festival/festival.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';


import { routing } from './app.routing';


@NgModule({
  imports:      [ BrowserModule, routing, FormsModule, HttpModule],
  declarations: [ AppComponent,
                                  MusicsearchComponent,
                                  NavbarComponent,
                                  ContactComponent,
                                  SearchComponent,
                                  AboutComponent,
                                  FestivalComponent,
                                  ArtistComponent,
                                  AlbumComponent
                                  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
