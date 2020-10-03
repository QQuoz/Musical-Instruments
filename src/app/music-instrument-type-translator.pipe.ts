import { removeSummaryDuplicates } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'musicInstrumentTypeTranslator',
})
export class MusicInstrumentTypeTranslatorPipe implements PipeTransform {
  transform(value: string) {
    value = value.toLowerCase();
    if (value.includes('wind')) {
      return 'dęty';
    } else if (value.includes('percussion')) {
      return 'perkusyjny';
    } else if (value.includes('stringed')) {
      return 'strunowy';
    }
  }
}
