import { IQaRequest } from '../contracts/iqa-request';

export class QaRequest implements IQaRequest {
  q: string;
  temperature: number;
  mode: string;

  constructor(q: string, temperature: number, mode: string) {
    this.q = q;
    this.temperature = temperature;
    this.mode = mode;
  }
}
