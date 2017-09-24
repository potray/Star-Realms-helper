import {Game} from "./game";

describe('Game class', () => {
  const INITIAL_AUTHORITY = 150;
  const PLAYER_ONE_NAME = 'Yarrick';
  const PLAYER_TWO_NAME = 'Friklauta';
  it('Should be created', () => {
    const game = new Game();
    expect(game).toBeTruthy();
  });
  it('Should have 2 players', () => {
    const game = new Game();
    expect(game.player1).toBeTruthy();
    expect(game.player2).toBeTruthy();
  });
  it('Should be created with an initial authority', () => {
    const game = new Game(INITIAL_AUTHORITY);
    expect(game.player1.authority).toBe(INITIAL_AUTHORITY);
    expect(game.player2.authority).toBe(INITIAL_AUTHORITY);
  });
  it('Should have both players with names if specified', () => {
    const game = new Game (INITIAL_AUTHORITY, PLAYER_ONE_NAME, PLAYER_TWO_NAME);
    expect(game.player1.name).toBe(PLAYER_ONE_NAME);
    expect(game.player2.name).toBe(PLAYER_TWO_NAME);
  })
});
