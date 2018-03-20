import { HomeController } from './home.controller';

describe('HomeController', () => {
  let homeController: HomeController;

  beforeEach(() => {
    homeController = new HomeController();
  });

  it('should create an instance', () => {
    expect(homeController).toBeTruthy();
  });
});
