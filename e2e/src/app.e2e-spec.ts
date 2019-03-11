import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('agl-developer-test Application', () => {
    let page: AppPage;

    beforeAll(() => {
        page = new AppPage();
        page.navigateTo();
    });

    it('display the first gender in the list', () => {
        expect(page.getFirstParagraphFromList().getText()).toEqual('Female');
    });
    it('display the last gender in the list', () => {
        expect(page.getLastParagraphFromList().getText()).toEqual('Male');
    });
    it('display the first element in list set', () => {
        expect(page.getFirstElementInListSet().getText()).toEqual('Garfield');
    });
    it('display the last element in list set', () => {
        expect(page.getLastElementInListSet().getText()).toEqual('Tom');
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
