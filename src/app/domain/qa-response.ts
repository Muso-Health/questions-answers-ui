import {IQaResponse} from '../contracts/iqa-response';

export class QaResponse implements IQaResponse {
  q: string;
  a: string;
  temperature: number;
  mode: string;
  status: number;
  status_message: string;

  constructor(
    q: string,
    a: string,
    temperature: number,
    mode: string,
    status: number,
    status_message: string
  ) {
    this.q = q;
    this.a = a;
    this.temperature = temperature;
    this.mode = mode;
    this.status = status;
    this.status_message = status_message;
  }
}
