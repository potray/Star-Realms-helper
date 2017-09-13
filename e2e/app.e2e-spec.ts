import { StarRealmsHelperPage } from './app.po';

describe('star-realms-helper App', () => {
  let page: StarRealmsHelperPage;

  beforeEach(() => {
    page = new StarRealmsHelperPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
