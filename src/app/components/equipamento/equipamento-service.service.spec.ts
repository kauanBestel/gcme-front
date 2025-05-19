import { TestBed } from '@angular/core/testing';

import { EquipamentoServiceService } from './equipamento-service.service';

describe('EquipamentoServiceService', () => {
  let service: EquipamentoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipamentoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
