import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ToolbarComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  exports: [
    FooterComponent,
    ToolbarComponent,
    AlbumComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
