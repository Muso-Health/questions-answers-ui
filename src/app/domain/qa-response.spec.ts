import { QaResponse } from './qa-response';

describe('QaResponse', () => {
  it('should create an instance', () => {
    expect(new QaResponse("q","a",0.2,"long",200,"")).toBeTruthy();
  });
});
