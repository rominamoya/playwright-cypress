# playwright-cypress
This repo contains the basic set up to run tests in cypress and playwright.
There a set tests written in cypress and playwright to make comparison easier.

## Installation

To install run 

```
 $ npm install  
```

### The Cypress code

The Cypress example code and tests are located under the cypress directory. 

To run the tests :

```
 $ npm run cypress   
```

Headed

```
 $ npm run cypress:open
```

### The Playwright code

The Playwright example code and test are located under the playwright directory. 

To run all tests:

```
$ npm run playwright 

```
Running tests in headed mode

```
$ npm run playwright:headed
```

## Debugging

Make one the test fail so you can check the debugging experience.
In the case of playwright, you will get generated a HTML report and from wich you can access the Trace Viewer.
In the case of cypreess, if you  
Compare with cypress, if running in the app (headed), by hovering on each command on the left pannel will allow you to time travel back to previous states.

## Speed
In order to check compare the speed I have run the tests in chrom side by side and I got the following results using these commands. 

| Playwright  | Cypress  |
|---|---|
| npm run playwright --project  chromium   | npm run cypress  --browser chrome  |
|3.4s   | 8s/10s with video  |

*to turn the videos off for cypress  this in the cypress.config.js

```
video: false,
```