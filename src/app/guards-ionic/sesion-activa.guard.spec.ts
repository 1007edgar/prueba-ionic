import { TestBed } from '@angular/core/testing';

import { SesionActivaGuard } from './sesion-activa.guard';

describe('SesionActivaGuard', () => {
  let guard: SesionActivaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SesionActivaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
