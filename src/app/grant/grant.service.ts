import { Injectable } from '@angular/core';

@Injectable()
export class GrantService {
  constructor() {}

  getGrants(): Array<{}> {
    return [
      {
        grantor: 'Bill & Melinda Gates Foundation',
        name: 'COVID 19 vaccine',
        amount: '50,000,000',
      },
      {
        grantor: 'USAID',
        name: 'Iodine Deficiency Disorders (IDD)',
        amount: '150,000,000',
      },
      {
        grantor: 'The United Nations',
        name: 'Climate Change Capacity Building',
        amount: '6,000,000',
      },
    ];
  }
}
