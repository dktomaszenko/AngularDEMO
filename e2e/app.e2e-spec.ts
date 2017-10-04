import { AngularDEMOPage } from './app.po';

describe('angular-demo App', () => {
  let page: AngularDEMOPage;

  beforeEach(() => {
    page = new AngularDEMOPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
