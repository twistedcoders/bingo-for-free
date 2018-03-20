import { BingoForFreePage } from './app.po';

describe('bingo-for-free App', () => {
  let page: BingoForFreePage;

  beforeEach(() => {
    page = new BingoForFreePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
