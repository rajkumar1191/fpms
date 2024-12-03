export interface Investment {
  name: string;
  date: string;
  amount: number;
  status: string;
}

export const INVESTMENT_DATA: Investment[] = [
  { date: '2024-04-01', name: 'Real Estate', amount: 10000000, status: 'P' },
  { date: '2024-05-01', name: 'Stocks', amount: 1100000, status: 'P' },
  { date: '2024-06-01', name: 'Large Cap', amount: 1200000, status: 'L' },
  { date: '2024-07-01', name: 'Mid Cap', amount: 1300000, status: 'L' },
  { date: '2024-08-01', name: 'Small Cap', amount: 1400000, status: 'P' },
  { date: '2024-09-01', name: 'Gold', amount: 1500000, status: 'P' },
  { date: '2024-10-01', name: 'FD', amount: 1600000, status: 'P' },
  { date: '2024-11-01', name: 'Liquid Fund', amount: 1700000, status: 'P' },
];
