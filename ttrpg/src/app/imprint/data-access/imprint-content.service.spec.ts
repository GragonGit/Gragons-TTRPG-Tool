import { TestBed } from '@angular/core/testing';

import { ImprintContentService } from './imprint-content.service';

describe('ImprintContentService', () => {
  let service: ImprintContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImprintContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
