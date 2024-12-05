import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IQAService } from '../contracts/iqa-service';
import { IQaRequest } from '../contracts/iqa-request';
import { IQaResponse } from '../contracts/iqa-response';

@Injectable({
  providedIn: 'root',
})
export class DirectQaService implements IQAService {
  private endpointUrl = 'https://us-central1-musohealth.cloudfunctions.net/sm-documentation-qa'; // Replace with actual endpoint URL

  constructor(private http: HttpClient) {}

  getAnswer(request: IQaRequest): Observable<IQaResponse> {
    return this.http.post<IQaResponse>(this.endpointUrl, request);
  }
}
