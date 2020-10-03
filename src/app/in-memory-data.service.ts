import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MusicalInstrument } from './musical-instrument';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const instruments = [
      {
        id: 1,
        name: 'Xylophone',
        type: 'PERCUSSION',
        description: 'Good solid staff',
        price: 800,
      },
      {
        id: 2,
        name: 'Vibraphone',
        type: 'PERCUSSION',
        description: 'Good solid staff',
        price: 1200,
      },
      {
        id: 3,
        name: 'Bells',
        type: 'PERCUSSION',
        description: 'Good solid staff',
        price: 20,
      },
      {
        id: 4,
        name: 'Drum',
        type: 'PERCUSSION',
        description: 'Good solid staff',
        price: 500,
      },
      {
        id: 5,
        name: 'Plates',
        type: 'PERCUSSION',
        description: 'Good solid staff',
        price: 100,
      },
      {
        id: 6,
        name: 'Tamburin',
        type: 'PERCUSSION',
        description: 'Good solid staff',
        price: 200,
      },
      {
        id: 7,
        name: 'Zither',
        type: 'STRINGED',
        description: 'Good solid staff',
        price: 150,
      },
      {
        id: 8,
        name: 'Guitar',
        type: 'STRINGED',
        description: 'Good solid staff',
        price: 250,
      },
      {
        id: 9,
        name: 'Bass guitar',
        type: 'STRINGED',
        description: 'Good solid staff',
        price: 300,
      },
      {
        id: 10,
        name: 'Harp',
        type: 'STRINGED',
        description: 'Good solid staff',
        price: 2000,
      },
      {
        id: 11,
        name: 'Banjo',
        type: 'STRINGED',
        description: 'Good solid staff',
        price: 200,
      },
      {
        id: 12,
        name: 'Triangle',
        type: 'PERCUSSION',
        description: 'Good solid staff',
        price: 10,
      },
      {
        id: 13,
        name: 'Straigh fluete',
        type: 'WIND',
        description: 'Good solid staff',
        price: 100,
      },
      {
        id: 14,
        name: 'Cross fluete',
        type: 'WIND',
        description: 'Good solid staff',
        price: 300,
      },
      {
        id: 15,
        name: 'Saxophone',
        type: 'WIND',
        description: 'Good solid staff',
        price: 390,
      },
      {
        id: 16,
        name: 'Oboe',
        type: 'WIND',
        description: 'Good solid staff',
        price: 380,
      },
      {
        id: 17,
        name: 'Piccolo fluete',
        type: 'WIND',
        description: 'Good solid staff',
        price: 90,
      },
      {
        id: 18,
        name: 'Clarinet',
        type: 'WIND',
        description: 'Good solid staff',
        price: 1500,
      },
      {
        id: 19,
        name: 'Contraband',
        type: 'WIND',
        description: 'Good solid staff',
        price: 950,
      },
      {
        id: 20,
        name: 'Basson',
        type: 'WIND',
        description: 'Good solid staff',
        price: 270,
      },
    ];
    return { instruments };
  }
  genId(instruments: MusicalInstrument[]): number {
    return instruments.length > 0
      ? Math.max(...instruments.map((instrument) => instrument.id)) + 1
      : 1;
  }
}
