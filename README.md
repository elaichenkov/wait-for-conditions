# wait-for-conditions

> wait-for-conditions wait-wor-conditions is a library for [Protractor](https://github.com/angular/protractor) tests that extends protractor's ExpectedConditions class with useful methods.

## Table of Contents

- [wait-for-conditions](#wait-for-conditions)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Import and usage](#import-and-usage)
  - [License](#license)

## Getting Started

### Installation

To use wait-for-conditions in your project, run:

```bash
npm i -D wait-for-conditions
```

### Import and usage

```ts
// importing protractor's browser and $$
import { browser, $$ } from 'protractor';

// Import wait for conditions class
import { WaitForConditions } from 'wait-for-conditions';

// Create an instance of WaitForConditions class
const waitFor = new WaitForConditions(browser);

describe('Test suite', () => {
  it('should wait for the tds', async () => {

    // Usage:
    await browser.wait(waitFor.numberOfElementsToBe($$('td'), 4), 5000, 'Failed after waiting for the number of tds');
  });
});
```

## License

wait-for-conditions is [MIT licensed](./LICENSE).
