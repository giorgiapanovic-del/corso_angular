import { TestBed } from '@angular/core/testing';
import { ProvaServices } from './prova-services';

describe('ProvaServices', () => {
  let service: ProvaServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvaServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
