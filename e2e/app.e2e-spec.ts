import { LoginAuthPage } from './app.po';

describe('login-auth App', () => {
  let page: LoginAuthPage;

  beforeEach(() => {
    page = new LoginAuthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
