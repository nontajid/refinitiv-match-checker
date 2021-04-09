import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { CalType } from './models/calType';
import { MatchCheckerService } from './services/match-checker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'refinitiv-three-col';
  calType = CalType;
  isCorrectValueType$: Observable<boolean>;

  formGroup = new FormGroup({
    'number': new FormControl(''),
    'calType': new FormControl(CalType.PRIME)
  });

  constructor(private matchCheckerService: MatchCheckerService) {}

  ngOnInit(): void {
    this.isCorrectValueType$ = this.formGroup.valueChanges.pipe(
      map(() => {
        return this.matchCheckerService.checkNumberType(this.formGroup.value?.number, this.formGroup.value?.calType);
      })
    )
  }
}
