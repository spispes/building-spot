import { BuildingSpotPage } from './app.po';

describe('building-spot App', () => {
  let page: BuildingSpotPage;

  beforeEach(() => {
    page = new BuildingSpotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
