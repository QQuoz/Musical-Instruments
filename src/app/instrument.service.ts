import { Injectable } from '@angular/core';
import { MusicalInstrument } from './musical-instrument';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class InstrumentService {

  private instrumentsUrl = 'api/instruments';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getInstruments(): Observable<MusicalInstrument[]> {
    return this.http.get<MusicalInstrument[]>(this.instrumentsUrl);
  }

  getInstrument(id: number): Observable<MusicalInstrument> {
    const url = `${this.instrumentsUrl}/${id}`;
    return this.http.get<MusicalInstrument>(url);
  }

  updateInstrument(instrument: MusicalInstrument): Observable<any> {
    return this.http.put(this.instrumentsUrl, instrument, this.httpOptions);
  }

  addInstrument(instrument: MusicalInstrument): Observable<MusicalInstrument> {
    return this.http.post<MusicalInstrument>(this.instrumentsUrl, instrument, this.httpOptions);
  }
}

