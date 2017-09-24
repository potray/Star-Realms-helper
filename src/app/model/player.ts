export class Player {
  public authority: number;
  public trade: number;
  public combat: number;
  public name: string;

  constructor (initialAuthority: number = 0, name: string = '') {
    this.authority = initialAuthority;
    this.trade = 0;
    this.combat = 0;
    this.name = name;
  }

  public subtractAuthority (amount: number) {
    this.authority -= amount;

    if (this.authority < 0) {
      this.authority = 0;
    }
  }

  public addAuthority (amount: number) {
    this.authority += amount;
  }
}
