import { Component, OnInit } from '@angular/core';
import { MusicalInstrument } from '../musical-instrument';
import { InstrumentService } from '../instrument.service';

@Component({
  selector: 'app-music-instrument-list',
  templateUrl: './music-instrument-list.component.html',
  styleUrls: ['./music-instrument-list.component.css']
})
export class MusicInstrumentListComponent implements OnInit {

  instruments: MusicalInstrument [];

  constructor(private instrumentService: InstrumentService ) { }

  ngOnInit() {
    this.getInstruments();
  }

  getInstruments(): void {
    this.instrumentService.getInstruments()
    .subscribe(instruments => this.instruments = instruments);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.instrumentService.addInstrument({ name } as MusicalInstrument)
    .subscribe(instrument => {
      this.instruments.push(instrument);
    });
  }
}
