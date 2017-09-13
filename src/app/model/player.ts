export class Player {
  public authority: number;
  public trade: number;
  public combat: number;

  constructor (initialAuthority: number = 0) {
    this.authority = initialAuthority;
    this.trade = 0;
    this.combat = 0;
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
