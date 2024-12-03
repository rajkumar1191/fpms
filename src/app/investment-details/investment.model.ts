/* eslint-disable @typescript-eslint/no-explicit-any */
export class Investments {
    id: number;
    name: string;
    quantity: any;
    amount: any;
    purDate: string;
    constructor(investments: Investments) {
      {
        this.id = investments.id || this.getRandomID();
        this.name = investments.name || '';
        this.quantity = investments.quantity || 0;
        this.amount = investments.amount || 0;
        this.purDate = investments.purDate || '';
      }
    }
    public getRandomID(): number {
      const S4 = () => {
        return ((1 + Math.random()) * 0x10000) | 0;
      };
      return S4() + S4();
    }
  }
  