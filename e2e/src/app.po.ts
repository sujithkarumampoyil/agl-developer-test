import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getFirstParagraphFromList() {
        return element.all(by.css('.list-section p')).first();
    }

    getLastParagraphFromList() {
        return element.all(by.css('.list-section p')).last();
    }

    getFirstElementInListSet() {
        return element.all(by.css('.list-section ul li')).first();
    }

    getLastElementInListSet() {
        return element.all(by.css('.list-section ul li')).last();
    }
}
