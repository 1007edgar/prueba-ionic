import { TestBed } from '@angular/core/testing';

import { SesionNoActivaGuard } from './sesion-no-activa.guard';

describe('SesionNoActivaGuard', () => {
  let guard: SesionNoActivaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SesionNoActivaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
