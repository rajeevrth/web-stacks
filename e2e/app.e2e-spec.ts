import { CrossZeroPage } from './app.po';

describe('cross-zero App', () => {
  let page: CrossZeroPage;

  beforeEach(() => {
    page = new CrossZeroPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
