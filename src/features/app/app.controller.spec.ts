import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(() => {
    appController = new AppController();
  });

  it('should create an instance', () => {
    expect(appController).toBeTruthy();
  });
});
