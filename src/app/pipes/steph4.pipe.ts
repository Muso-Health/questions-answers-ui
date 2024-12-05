import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Pipe({
  name: 'steph4',
  standalone: true
})
export class Steph4Pipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string) {
    if (!value) return value;
    const transformedValue = value
      .replace('\n', '<br>')
      .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
    return this.sanitizer.bypassSecurityTrustHtml(transformedValue);
  }

}
