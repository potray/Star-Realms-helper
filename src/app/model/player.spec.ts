import {Player} from "./player";

describe('Player class', () => {
  const INITIAL_AUTHORITY = 150;
  const PLAYER_NAME = 'Yarrick';
  it('Should be created', () => {
    const player = new Player();
    expect(player).toBeTruthy();
  });
  it('Should have authority, trade and combat', () => {
    const player = new Player();
    expect(player.authority).toBe(0);
    expect(player.trade).toBe(0);
    expect(player.combat).toBe(0);
  });
  it('Should be have 150 authority points when initialized in that way', () => {
    const player = new Player(INITIAL_AUTHORITY);
    expect(player.authority).toBe(INITIAL_AUTHORITY);
    expect(player.trade).toBe(0);
    expect(player.combat).toBe(0);
  });
  it('Should subtractAuthority authority', () => {
    const authorityToSubtract = 10;
    const player = new Player(INITIAL_AUTHORITY);
    player.subtractAuthority(authorityToSubtract);
    expect(player.authority).toBe(INITIAL_AUTHORITY - authorityToSubtract);
    expect(player.trade).toBe(0);
    expect(player.combat).toBe(0);
  });
  it('Should add authority', () => {
    const authorityToAdd = 30;
    const player = new Player(INITIAL_AUTHORITY);
    player.addAuthority(authorityToAdd);
    expect(player.authority).toBe(INITIAL_AUTHORITY + authorityToAdd);
    expect(player.trade).toBe(0);
    expect(player.combat).toBe(0);
  });
  it('Should not have a negative authority', () => {
    const player = new Player(INITIAL_AUTHORITY);
    player.subtractAuthority(INITIAL_AUTHORITY);
    expect(player.authority).toBe(0);
    player.subtractAuthority(10);
    expect(player.authority).toBe(0);
  });
  it('Should have a name', () => {
    const player = new Player(INITIAL_AUTHORITY, PLAYER_NAME);
    expect(player.name).toBe(PLAYER_NAME);
  })
});
