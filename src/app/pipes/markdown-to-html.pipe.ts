import {Pipe, PipeTransform} from '@angular/core';
import {marked, MarkedOptions} from 'marked';

@Pipe({
  name: 'MarkdownToHtml'
})

export class MarkdownToHtmlPipe implements PipeTransform {
  public async transform(markdown: string, options?: MarkedOptions): Promise<string> {
    if (markdown == null) return '';
    return await marked(markdown, options);
  }
}
