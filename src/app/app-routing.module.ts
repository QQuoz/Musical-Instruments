import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicInstrumentListComponent } from './music-instrument-list/music-instrument-list.component';
import { MusicInstrumentDetailsComponent } from './music-instrument-details/music-instrument-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/instruments', pathMatch: 'full' },
  { path: 'detail/:id', component: MusicInstrumentDetailsComponent },
  { path: 'instruments', component: MusicInstrumentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
