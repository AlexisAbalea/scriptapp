import { TestBed } from '@angular/core/testing';

import { ScriptAppService } from './script-app.service';

describe('ScriptAppService', () => {
  let service: ScriptAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
