import { Injectable } from '@angular/core';
import { MusicalInstrument } from './musical-instrument';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import * as alertify from 'alertifyjs';
import { RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class InstrumentService {
  private instrumentsUrl = 'api/instruments';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getInstruments(): Observable<MusicalInstrument[]> {
    return this.http
      .get<MusicalInstrument[]>(this.instrumentsUrl)
      .pipe(
        catchError(this.handleError<MusicalInstrument[]>('getInstruments', []))
      );
  }

  getInstrument(id: number): Observable<MusicalInstrument> {
    const url = `${this.instrumentsUrl}/${id}`;
    return this.http
      .get<MusicalInstrument>(url)
      .pipe(
        catchError(
          this.handleError<MusicalInstrument>(`getInstrument id=${id}`)
        )
      );
  }

  updateInstrument(instrument: MusicalInstrument): Observable<any> {
    return this.http.put(this.instrumentsUrl, instrument, this.httpOptions);
  }

  addInstrument(instrument: MusicalInstrument): Observable<MusicalInstrument> {
    return this.http.post<MusicalInstrument>(
      this.instrumentsUrl,
      instrument,
      this.httpOptions
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      alertify.alert(
        'The instrument with the given id number does not exist',
        () => {
          alertify.message('OK');
        }
      );

      return of(result as T);
    };
  }
}
