# playwright-cypress
This repo contains the basic set up to run tests in cypress and playwright.
There a set tests written in cypress and playwright to make comparison easier.

## Installation
To install run 

```
 $ npm install  
```
## The Cypress code
The Cypress example code and tests are located under the cypress directory. 

To run the tests :

```
 $ npm run cypress:open   
```
Headless

```
 $ npm run cypress
```
## The Playwright code
The Playwright example code and test are located under the playwright directory. 

To run the tests:

```
$ npm run playwright 

```

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