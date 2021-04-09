import { Injectable } from '@angular/core';
import { CalType } from '../models/calType';

@Injectable({
  providedIn: 'root'
})
export class MatchCheckerService {

  constructor() { }

  checkNumberType(num: number, calType: CalType): boolean {
    const roundAndPositiveNum = this.covertToRoundAndPositiveNum(num);

    switch (calType) {
      case CalType.PRIME:
        return this.isPrime(roundAndPositiveNum);
      case CalType.FIBONACCI:
        return this.isFibonacci(roundAndPositiveNum);
    }

  }

  private isPrime(num: number): boolean {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return num > 1;
  }

  private isFibonacci(num): boolean {
    let fibSequence = [0, 1];
    let fibSequenceLength;

    for (let i = 1; i <= num; i = (fibSequence[fibSequenceLength - 1] + fibSequence[fibSequenceLength])) {
      fibSequence.push(i);
      fibSequenceLength = fibSequence.length - 1;
    }

    return fibSequence[fibSequenceLength] === num;
  }

  private covertToRoundAndPositiveNum(num: number): number {
    return num <= 0 ? 1 : Math.round(num);
  }
}
