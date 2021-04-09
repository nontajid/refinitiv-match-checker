import { TestBed } from '@angular/core/testing';
import { CalType } from '../models/calType';

import { MatchCheckerService } from './match-checker.service';

describe('MatchCheckerService', () => {
  let service: MatchCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('checkNumberType', () => {
    it('should be able to identify prime number', () => {
      const primeNumber = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
      const nonPrime = [-5, 1, 4, 6, 8, 9, 10 ,12, 14, 15, 16];

      primeNumber.forEach(num => {
        expect(service.checkNumberType(num, CalType.PRIME)).toBe(true);
      })

      nonPrime.forEach(num => {
        expect(service.checkNumberType(num, CalType.PRIME)).toBe(false);
      })
    });

    it('should be able to identify fibonacci number', () => {
      const fib = [-5, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
      const nonFib = [4, 6, 7, 9, 10 ,11, 12, 14, 15];

      fib.forEach(num => {
        expect(service.checkNumberType(num, CalType.FIBONACCI)).toBe(true);
      })

      nonFib.forEach(num => {
        expect(service.checkNumberType(num, CalType.FIBONACCI)).toBe(false);
      })
    });
  })

});
