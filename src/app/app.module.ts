import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MusicInstrumentListComponent } from './music-instrument-list/music-instrument-list.component';
import { MusicInstrumentDetailsComponent } from './music-instrument-details/music-instrument-details.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MusicInstrumentTypeTranslatorPipe } from './music-instrument-type-translator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MusicInstrumentListComponent,
    MusicInstrumentDetailsComponent,
    MusicInstrumentTypeTranslatorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
