import { ILocation, ISize } from 'selenium-webdriver';
import { ElementFinder, ProtractorBrowser, ProtractorExpectedConditions, ElementArrayFinder } from 'protractor';

export class WaitForConditions extends ProtractorExpectedConditions {
  constructor(public browser: ProtractorBrowser) {
    super(browser);
  }

  public attributeToBe(elementFinder: ElementFinder, expectedAttribute: string, expectedValue: string): Function {
    const attributeHasValue = () => {
      return elementFinder.getAttribute(expectedAttribute).then((actualValue: string): boolean => {
        return actualValue === expectedValue;
      });
    };

    return this.and(this.presenceOf(elementFinder), attributeHasValue);
  }

  public attributeContains(elementFinder: ElementFinder, expectedAttribute: string, expectedValue: string): Function {
    const attributeIncludesValue = () => {
      return elementFinder.getAttribute(expectedAttribute).then((actualValue: string): boolean => {
        return actualValue.includes(expectedValue);
      });
    };

    return this.and(this.presenceOf(elementFinder), attributeIncludesValue);
  }

  public attributeToBeNotEmpty(elementFinder: ElementFinder, expectedAttribute: string): Function {
    const hasAttribute = () => {
      return elementFinder.getAttribute(expectedAttribute).then((actualAttribute: string): boolean => {
        return !!actualAttribute;
      });
    };

    return this.and(this.presenceOf(elementFinder), hasAttribute);
  }

  public numberOfElementsToBe(elementArrayFinder: ElementArrayFinder, expectedCount: number): Function {
    const elementsHaveExpectedCount = () => {
      return elementArrayFinder.count().then((actualCount: number): boolean => {
        return actualCount === expectedCount;
      });
    };

    return this.and(this.presenceOf(elementArrayFinder.first()), elementsHaveExpectedCount);
  }

  public numberOfElementsToBeLessThan(elementArrayFinder: ElementArrayFinder, expectedCount: number): Function {
    const elementsHaveLessThanExpectedCount = () => {
      return elementArrayFinder.count().then((actualCount: number): boolean => {
        return actualCount < expectedCount;
      });
    };

    return this.and(this.presenceOf(elementArrayFinder.first()), elementsHaveLessThanExpectedCount);
  }

  public numberOfElementsToBeMoreThan(elementArrayFinder: ElementArrayFinder, expectedCount: number): Function {
    const elementsHaveMoreThanExpectedCount = () => {
      return elementArrayFinder.count().then((actualCount: number): boolean => {
        return actualCount > expectedCount;
      });
    };

    return this.and(this.presenceOf(elementArrayFinder.first()), elementsHaveMoreThanExpectedCount);
  }

  public numberOfWindowsToBe(expectedNumberOfWindows: number): Function {
    return () => {
      return this.browser.driver.getAllWindowHandles().then((windowHandles: string[]): boolean => {
        const actualNumberOfWindows = windowHandles.length;

        return actualNumberOfWindows === expectedNumberOfWindows;
      });
    };
  }

  public classContains(elementFinder: ElementFinder, expectedClass: string): Function {
    const hasClass = () => {
      return elementFinder.getAttribute('css').then((actualClass: string): boolean => {
        return actualClass.includes(expectedClass);
      });
    };

    return this.and(this.presenceOf(elementFinder), hasClass);
  }

  public cssValueContains(elementFinder: ElementFinder, expectedCss: string, expectedCssValue: string): Function {
    const hasCssValue = () => {
      return elementFinder.getCssValue(expectedCss).then((actualCss: string): boolean => {
        return actualCss.includes(expectedCssValue);
      });
    };

    return this.and(this.presenceOf(elementFinder), hasCssValue);
  }

  public locationToBe(elementFinder: ElementFinder, expectedLocation: ILocation): Function {
    const locationEquals = () => {
      return elementFinder.getLocation().then((actualLocation: ILocation): boolean => {
        return actualLocation.x === expectedLocation.x && actualLocation.y === expectedLocation.y;
      });
    };

    return this.and(this.presenceOf(elementFinder), locationEquals);
  }

  public sizeToBe(elementFinder: ElementFinder, expectedSize: ISize): Function {
    const sizeEquals = () => {
      return elementFinder.getSize().then((actualSize: ISize): boolean => {
        return actualSize.height === expectedSize.height && actualSize.width === expectedSize.width;
      });
    };

    return this.and(this.presenceOf(elementFinder), sizeEquals);
  }
}
