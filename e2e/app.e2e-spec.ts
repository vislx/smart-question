import { SmartQuestionPage } from './app.po';

describe('smart-question App', () => {
  let page: SmartQuestionPage;

  beforeEach(() => {
    page = new SmartQuestionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
