import { TestProject021116Page } from './app.po';

describe('test-project-021116 App', function() {
  let page: TestProject021116Page;

  beforeEach(() => {
    page = new TestProject021116Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
