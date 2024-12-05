import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectQaService } from '../../services/direct-qa-service.service';  // Adjust path as necessary
import { IQaRequest } from '../../contracts/iqa-request';
import { IQaResponse } from '../../contracts/iqa-response';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MarkdownToHtmlPipe} from '../../pipes/markdown-to-html.pipe';
import {IQAFeed} from '../../contracts/iqa-feed';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-qa-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MarkdownToHtmlPipe, MatCard, MatCardContent, MatIcon],
  templateUrl: './qa-form.component.html',
  styleUrl: './qa-form.component.css'
})
export class QaFormComponent {
  question: string = '';
  questionFlying: string = '';
  questionThinking: string = '';
  qaFeed: IQAFeed[] = [];

  constructor(private qaService: DirectQaService) {}

  onSubmit(): void {
    this.questionFlying = this.question;
    this.questionThinking = 'Thinking';
    const request: IQaRequest = {
      q: this.question,
      temperature: 0.0,
      mode: 'long'
    };

    this.qaService.getAnswer(request).subscribe((response: IQaResponse) => {
      this.qaFeed.push({
        question: this.question,
        answer: response.a
      });
      this.questionFlying = '';
      this.questionThinking = '';
    }, error => {
      console.error('Error fetching answer', error);
      this.questionFlying = '';
      this.questionThinking = '';
      this.qaFeed.push({
        question: this.question,
        answer: error
      });
    });
  }
}
