import { IQaRequest } from './iqa-request';
import { IQaResponse } from './iqa-response';
import {Observable} from 'rxjs';

export interface IQAService {
  getAnswer(request: IQaRequest): Observable<IQaResponse>;
}
