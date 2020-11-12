import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import {DatePipe} from '@angular/common';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { AlbumComponent } from 'src/app/components/album/album.component';
import { ArtistComponent } from 'src/app/components/artist/artist.component';
import { ModalDeleteComponent } from 'src/app/components/modal-delete/modal-delete.component';
import { ModalCreateComponent } from 'src/app/components/modal-create/modal-create.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ToolbarComponent,
    AlbumComponent,
    ArtistComponent,
    ModalDeleteComponent,
    ModalCreateComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    FooterComponent,
    ToolbarComponent,
    AlbumComponent,
    ArtistComponent,
    ModalDeleteComponent,
    ModalCreateComponent
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
