import { LoadingService } from './../loading/loading.service';
import { Component, OnInit, Input } from '@angular/core';
import { MusicalInstrument } from '../musical-instrument';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { InstrumentService } from '../instrument.service';
import { MusicInstrumentTypeTranslatorPipe } from '../music-instrument-type-translator.pipe';
import { delay, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-music-instrument-details',
  templateUrl: './music-instrument-details.component.html',
  styleUrls: ['./music-instrument-details.component.css']
})
export class MusicInstrumentDetailsComponent implements OnInit {

  instrument: MusicalInstrument;

  constructor(
    private route: ActivatedRoute,
    private instrumentService: InstrumentService,
    private location: Location,
    private LoadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.getInstrument();
  }

  getInstrument(): void {
    this.LoadingService.loadingOn();
    const id = +this.route.snapshot.paramMap.get('id');
    this.instrumentService.getInstrument(id).pipe(
      delay(1000),
      finalize(() => this.LoadingService.loadingOff())
    )
    .subscribe(instrument => this.instrument = instrument);
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.instrumentService.updateInstrument(this.instrument)
      .subscribe(() => this.goBack());
  }
}
