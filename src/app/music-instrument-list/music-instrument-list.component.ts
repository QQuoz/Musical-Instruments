import { LoadingService } from './../loading/loading.service';
import { Component, OnInit } from '@angular/core';
import { MusicalInstrument } from '../musical-instrument';
import { InstrumentService } from '../instrument.service';
import { delay, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-music-instrument-list',
  templateUrl: './music-instrument-list.component.html',
  styleUrls: ['./music-instrument-list.component.css'],
})
export class MusicInstrumentListComponent implements OnInit {
  instruments: MusicalInstrument[];

  constructor(
    private instrumentService: InstrumentService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.getInstruments();
  }

  getInstruments(): void {
    this.loadingService.loadingOn();
    this.instrumentService
      .getInstruments()
      .pipe(
        delay(1000),
        finalize(() => this.loadingService.loadingOff())
      )
      .subscribe((instruments) => (this.instruments = instruments));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.instrumentService
      .addInstrument({ name } as MusicalInstrument)
      .subscribe((instrument) => {
        this.instruments.push(instrument);
      });
  }
}
