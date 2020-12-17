import { Injectable } from '@angular/core';

@Injectable()
export class GrantServiceMock {
  constructor() {}

  getGrants(): Array<{}> {
    return [
      {
        grantor: 'Bill & Melinda Gates Foundation',
        name: 'COVID 19 vaccine',
        amount: '50, 000000',
      },
    ];
  }
}
